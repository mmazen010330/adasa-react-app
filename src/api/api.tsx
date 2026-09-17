import axios from 'axios';

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
};

export type DiscoverCategory = {
  title: string;
  count: number;
  icon: string;
};

type PostsResponse = {
  posts: Post[];
};

const categoryIconMap: Record<string, string> = {
  'إضاءة': 'sun',
  'بورتريه': 'user',
  'مناظر طبيعية': 'mountain',
  'تقنيات': 'sliders',
  'معدات': 'settings',
};

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get<PostsResponse>('/posts.json');
  return response.data.posts;
};

export const getDiscoverCategories = (posts: Post[]): DiscoverCategory[] => {
  const categoryCounts = new Map<string, number>();

  posts.forEach((post) => {
    const title = post.category?.trim();
    if (title) {
      categoryCounts.set(title, (categoryCounts.get(title) ?? 0) + 1);
    }
  });

  return Array.from(categoryCounts.entries()).map(([title, count]) => ({
    title,
    count,
    icon: categoryIconMap[title] ?? 'folder',
  }));
};

export type Author = {
  name: string;
  avatar: string;
  role: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
};

export const getAuthors = (posts: Post[]): Author[] => {
  const authorsMap = new Map<string, Author>();

  posts.forEach((post) => {
    if (post.author?.name && !authorsMap.has(post.author.name)) {
      authorsMap.set(post.author.name, {
        name: post.author.name,
        avatar: post.author.avatar,
        role: post.author.role,
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://x.com',
      });
    }
  });

  return Array.from(authorsMap.values());
};

export const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
};



