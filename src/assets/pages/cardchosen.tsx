import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPosts, type Post } from '../../api/api';
import Footer from '../componants/footer';
import ArticleHero from '../componants/articlehero';
import ArticleSidebar, { type ContentSection } from '../componants/articlesidebar';
import ArticleContent from '../componants/articlecontent';
import ArticleRelated from '../componants/articlerelated';

interface CardchosenProps {
  slug?: string;
  id?: number;
}

function Cardchosen({ slug: propSlug, id: propId }: CardchosenProps) {
  const { slug: routeSlug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // Load posts from API
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const allPosts = await getPosts();
        setPosts(allPosts);

        // Detect slug/id from route params, query, pathname or props
        const urlParams = new URLSearchParams(window.location.search);
        const pathSlug = window.location.pathname.includes('/blog/')
          ? window.location.pathname.split('/blog/')[1]?.split('/')[0]
          : null;
        const targetSlug = routeSlug || propSlug || urlParams.get('slug') || pathSlug;
        const targetId = propId || (urlParams.get('id') ? Number(urlParams.get('id')) : null);

        let selected = allPosts[0];
        if (targetSlug) {
          const match = allPosts.find((p) => p.slug === targetSlug);
          if (match) selected = match;
        } else if (targetId) {
          const match = allPosts.find((p) => p.id === targetId);
          if (match) selected = match;
        }

        setCurrentPost(selected || null);
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [routeSlug, propSlug, propId]);

  // Parse markdown ## headings and paragraphs from post.content
  const { introText, sections } = useMemo(() => {
    if (!currentPost?.content) return { introText: '', sections: [] };

    const raw = currentPost.content;
    const parts = raw.split(/\n##\s+/);

    const intro = parts[0]?.trim() || '';
    const parsedSections: ContentSection[] = [];

    for (let i = 1; i < parts.length; i++) {
      const chunk = parts[i];
      const lines = chunk.split('\n');
      const title = lines[0]?.trim() || '';
      const paragraphs = lines.slice(1).map((l) => l.trim()).filter(Boolean);

      if (title) {
        parsedSections.push({ title, paragraphs });
      }
    }

    return { introText: intro, sections: parsedSections };
  }, [currentPost]);

  // Related posts (from same category or fallback)
  const relatedPosts = useMemo(() => {
    if (!currentPost || posts.length === 0) return [];
    const sameCat = posts.filter(
      (p) => p.id !== currentPost.id && p.category === currentPost.category
    );
    if (sameCat.length >= 3) return sameCat.slice(0, 3);

    const others = posts.filter((p) => p.id !== currentPost.id && !sameCat.includes(p));
    return [...sameCat, ...others].slice(0, 3);
  }, [posts, currentPost]);

  const handleSelectPost = (post: Post) => {
    setCurrentPost(post);
    navigate(`/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (index: number) => {
    setActiveSectionIndex(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading || !currentPost) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center text-white">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div dir="rtl" className="bg-[#080808] text-neutral-300 min-h-screen">

      {/* 1. HERO BANNER COMPONENT */}
      <ArticleHero post={currentPost} />

      {/* 2. MAIN BODY & SIDEBAR */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Content / Right Column in RTL (Quote, Markdown Sections, Tags, Share, Bio) */}
          <div className="lg:col-span-8">
            <ArticleContent
              post={currentPost}
              introText={introText}
              sections={sections}
            />
          </div>

          {/* Sidebar / Left Column in RTL (Table of Contents, Stats, Newsletter) */}
          <div className="lg:col-span-4">
            <ArticleSidebar
              sections={sections}
              activeSectionIndex={activeSectionIndex}
              onSelectSection={handleScrollToSection}
              readTime={currentPost.readTime}
              date={currentPost.date}
            />
          </div>
        </div>

        {/* 3. RELATED ARTICLES COMPONENT */}
        <ArticleRelated
          relatedPosts={relatedPosts}
          onSelectPost={handleSelectPost}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Cardchosen;
