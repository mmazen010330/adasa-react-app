import { Link } from 'react-router-dom';
import { Calendar, Clock, Home } from 'lucide-react';
import type { Post } from '../../api/api';

interface ArticleHeroProps {
  post: Post;
}

function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <header dir="rtl" className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-4 sm:pb-6">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-[#080808]/45" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
      </div>

      {/* Top Breadcrumb */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 w-full flex justify-start">
        <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-neutral-400">
          <Link to="/" className="hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5" />
          </Link>
          <span className="text-neutral-500">›</span>
          <Link to="/blog" className="hover:text-white transition-colors">
            المدونة
          </Link>
          <span className="text-neutral-500">›</span>
          <span className="text-orange-400 font-semibold">{post.category}</span>
        </nav>
      </div>

      {/* Hero Content - Aligned to Right */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-right">
        {/* Metadata badges row */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium mb-4 flex-wrap">
          <span className="px-3.5 py-1 rounded-full bg-[#ff5a00] text-white font-bold shadow-md shadow-orange-500/30">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5 max-w-4xl text-right">
          {post.title}
        </h1>

        {/* Author Pill - Avatar on Right, Name/Role on Left */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-[#141414]/90 border border-neutral-800 backdrop-blur-md shadow-xl">
          {/* Avatar on the right */}
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover border border-neutral-700 shrink-0"
          />
          {/* Name & Role on the left */}
          <div className="flex flex-col text-right">
            <span className="text-sm font-bold text-white leading-tight">{post.author.name}</span>
            <span className="text-xs text-neutral-400">{post.author.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ArticleHero;
