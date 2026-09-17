import { Link } from 'react-router-dom';
import type { Post } from '../../api/api';

type SelectedArticlesProps = {
  posts: Post[];
};

function SelectedArticles({ posts }: SelectedArticlesProps) {
  const visiblePosts = posts.slice(0, 3);

  // Main section for selected article cards from the API
  return (
    <section
      id="selected-articles-section"
      aria-label="Selected articles"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div id="selected-articles-container" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* badge */}
        <div dir="rtl" className="text-right flex flex-col items-start gap-6">
 <div className="section-label inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/5 animate-fade-in">
  <span className="relative flex items-center gap-1.5 shrink-0 ">
  <span className="text-sm font-medium text-neutral-300">
مميز</span>
    {/* Dot 1 */}
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
    </span>
    {/* Dot 2 — pulses after dot 1 */}
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 [animation-delay:500ms]"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
    </span>
  </span>
</div>

        {/* Section title badge */}
        <div className="space-y-3">
      <h2 className="text-amber-50 text-6xl mb-0 mt-0">مقالات مختارة</h2>
       <p className= "text-amber-50">محتوى منتقى لبدء رحلة تعلمك</p>
       </div>
       <Link
         to="/blog"
         className="self-end items-center mt-6 flex justify-center gap-2 px-8 py-2 bg-[#FF5A00] text-white rounded-2xl text-lg font-bold hover:bg-[#E04F00] transition-all"
       >
  <span>عرض الكل</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
</Link>
       
       </div>
        <div id="selected-articles-list" className="text-center max-w-6xl mx-auto mb-16 flex flex-col gap-4 mt-8">
             {visiblePosts.map((post) => (
            <article
              key={post.id}
              id={`selected-articles-card-${post.id}`}
              className="flex flex-col md:flex-row-reverse rounded-2xl border border-neutral-800 bg-neutral-900/70 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-orange-500/40 overflow-hidden"
            >
              {/* Article image — right side on desktop, top on mobile */}
              <Link to={`/blog/${post.slug}`} id={`selected-articles-image-wrapper-${post.id}`} className="md:w-1/2 overflow-hidden block">
                <img
                  id={`selected-articles-image-${post.id}`}
                  src={post.image}
                  alt={post.title}
                  className="h-64 md:h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Article content — left side */}
              <div id={`selected-articles-content-${post.id}`} className="md:w-1/2 p-5 flex flex-col justify-between">
                <div>
                  {/* Article metadata */}
                  <div id={`selected-articles-meta-${post.id}`} className="mb-3 flex items-center justify-between text-xs text-neutral-400">
                    <span id={`selected-articles-category-${post.id}`} className="rounded-full bg-orange-500/10 px-2 py-1 text-orange-300">
                      {post.category}
                    </span>
                    <span id={`selected-articles-read-time-${post.id}`}>{post.readTime}</span>
                  </div>

                  <div className="text-right">
                    {/* Article text content */}
                    <h2
                      id={`selected-articles-title-${post.id}`}
                      className="mb-4 font-bold text-white cursor-pointer text-3xl leading-tight mt-0 text-right hover:text-orange-400 transition-colors"
                    >
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p id={`selected-articles-description-${post.id}`} className="text-sm leading-6 text-neutral-300 text-right">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Author info — bottom of content area */}
                <div id={`selected-articles-author-${post.id}`} className="mt-6 flex items-center gap-3 flex-row-reverse">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{post.author.name}</p>
                    <p className="text-xs text-neutral-400">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedArticles;
