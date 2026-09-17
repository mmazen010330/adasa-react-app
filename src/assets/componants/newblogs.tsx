import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, Clock } from 'lucide-react';
import { getPosts, type Post } from '../../api/api';

type NewblogsProps = {
  posts?: Post[];
};

const formatArabicDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const months = [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  } catch {
    return dateString;
  }
};

function Newblogs({ posts: initialPosts }: NewblogsProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (initialPosts && initialPosts.length > 0) {
      setPosts(initialPosts);
    } else {
      const loadPosts = async () => {
        const data = await getPosts();
        setPosts(data);
      };
      loadPosts();
    }
  }, [initialPosts]);

  // Display the 3 newest articles (or the next 3 after featured articles)
  const recentPosts = posts.length > 3 ? posts.slice(3, 6) : posts.slice(0, 3);

  return (
    <section dir="rtl" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Title on Right, "View all" link on Left */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          {/* Right Header info */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/5 mb-3 animate-fade-in">
              <span className="relative flex items-center gap-1.5 shrink-0">
                <span className="text-sm font-medium text-orange-400">الأحدث</span>
                {/* Dot 1 */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                {/* Dot 2 */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 [animation-delay:500ms]"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              أحدث المقالات
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          {/* Left Header Action */}
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium text-sm transition-all duration-200"
          >
            <span>عرض جميع المقالات</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-neutral-800/80 bg-[#141414] hover:border-neutral-700/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between shadow-lg shadow-black/20"
            >
              {/* Card Image */}
              <Link to={`/blog/${post.slug}`} className="relative h-56 w-full overflow-hidden bg-neutral-900 block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category Badge on Top-Right */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs text-neutral-200 font-medium">
                  {post.category}
                </span>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  {/* Meta: Read time + Date */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{post.readTime}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{formatArabicDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2.5 leading-snug group-hover:text-orange-400 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer: Author Info on Right & Arrow Icon on Left */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover ring-1 ring-orange-500/20"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  {/* Circular Action Button */}
                  <Link
                    to={`/blog/${post.slug}`}
                    aria-label={`قراءة مقال ${post.title}`}
                    className="w-8 h-8 rounded-full bg-[#20150e] border border-orange-500/25 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Newblogs;
