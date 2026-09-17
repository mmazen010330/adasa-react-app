import { useState } from 'react';
import { Camera, Tag, Share2, Link2, Check } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import type { Post } from '../../api/api';
import type { ContentSection } from './articlesidebar';

interface ArticleContentProps {
  post: Post;
  introText: string;
  sections: ContentSection[];
}

function ArticleContent({ post, introText, sections }: ArticleContentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article className="space-y-8">
      {/* Featured Quote / Excerpt Card */}
      {post.excerpt && (
        <div className="bg-[#19110b] border border-orange-500/30 rounded-2xl p-6 sm:p-7 text-orange-300 text-base sm:text-lg leading-relaxed font-medium shadow-lg shadow-orange-950/20">
          "{post.excerpt}"
        </div>
      )}

      {/* Intro text */}
      {introText && (
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
          {introText}
        </p>
      )}

      {/* Markdown Sections */}
      <div className="space-y-10">
        {sections.map((sec, idx) => (
          <section key={idx} id={`section-${idx}`} className="scroll-mt-24 space-y-4">
            {/* Section Title with Camera Accent */}
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {sec.title}
              </h2>
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center shrink-0">
                <Camera className="w-4 h-4" />
              </div>
            </div>

            {/* Section Paragraphs */}
            {sec.paragraphs.map((p, pIdx) => (
              <p
                key={pIdx}
                className="text-neutral-300 text-sm sm:text-base leading-relaxed text-right"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* Tags Box */}
      {post.tags && post.tags.length > 0 && (
        <div className="bg-[#121212]/95 border border-neutral-850 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3 text-sm font-bold text-white">
            <Tag className="w-4 h-4 text-orange-500" />
            <span>الوسوم</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-xl bg-[#181818] border border-neutral-800 text-xs text-neutral-400 hover:text-orange-400 hover:border-orange-500/40 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Share Box */}
      <div className="bg-[#121212]/95 border border-neutral-850 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Share2 className="w-4 h-4 text-orange-500" />
          <span>شارك المقال</span>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyLink}
            aria-label="نسخ الرابط"
            className="w-9 h-9 rounded-xl bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#20140c] flex items-center justify-center transition-all cursor-pointer relative"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Link2 className="w-4 h-4" />}
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="مشاركة عبر واتساب"
            className="w-9 h-9 rounded-xl bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#20140c] flex items-center justify-center transition-all"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="مشاركة عبر لينكدإن"
            className="w-9 h-9 rounded-xl bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#20140c] flex items-center justify-center transition-all"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="مشاركة عبر إكس"
            className="w-9 h-9 rounded-xl bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#20140c] flex items-center justify-center transition-all"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Author Bio Box */}
      <div className="bg-[#121212]/95 border border-neutral-850 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-20 h-20 rounded-2xl object-cover border-2 border-neutral-800 shrink-0"
        />
        <div className="flex flex-col text-center sm:text-right flex-1">
          <span className="text-xs font-semibold text-[#ff5a00] mb-1">كاتب المقال</span>
          <h4 className="text-lg font-bold text-white mb-0.5">{post.author.name}</h4>
          <span className="text-xs text-neutral-400 mb-2.5">{post.author.role}</span>
          <p className="text-xs text-neutral-400 leading-relaxed">
            مصور محترف بشغف لمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي لتمكين المجتمع من التقاط لحظات لا تُنسى.
          </p>
        </div>
      </div>
    </article>
  );
}

export default ArticleContent;
