import { FolderOpen, ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Post } from '../../api/api';

interface ArticleRelatedProps {
  relatedPosts: Post[];
  onSelectPost: (post: Post) => void;
}

function ArticleRelated({ relatedPosts, onSelectPost }: ArticleRelatedProps) {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="mt-20 pt-12 border-t border-neutral-900">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#20140c] border border-orange-500/30 text-orange-500 flex items-center justify-center">
            <FolderOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">مقالات قد تعجبك</h3>
            <p className="text-xs text-neutral-400">استكشف المزيد من المحتوى المميز</p>
          </div>
        </div>

        <Link
          to="/blog"
          className="text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center gap-1.5 transition-all"
        >
          <span>عرض الكل</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((relPost) => (
          <article
            key={relPost.id}
            onClick={() => onSelectPost(relPost)}
            className="group bg-[#121212] border border-neutral-850 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-orange-500/5 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
              <img
                src={relPost.image}
                alt={relPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#ff5a00] text-white text-xs font-bold shadow-md shadow-orange-500/30">
                {relPost.category}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2.5 line-clamp-2 leading-snug">
                  {relPost.title}
                </h4>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-850/60 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <img
                    src={relPost.author.avatar}
                    alt={relPost.author.name}
                    className="w-6 h-6 rounded-full object-cover border border-neutral-800"
                  />
                  <span>{relPost.author.name}</span>
                </div>
                <span className="flex items-center gap-1 text-neutral-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{relPost.readTime}</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ArticleRelated;
