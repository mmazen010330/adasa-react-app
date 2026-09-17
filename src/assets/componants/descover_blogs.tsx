
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, User, Mountain, SlidersHorizontal, Settings, Folder, ChevronLeft } from 'lucide-react';
import { getDiscoverCategories, getPosts, type DiscoverCategory, type Post } from '../../api/api';

type DescoverBlogsProps = {
  posts?: Post[];
};

const renderCategoryIcon = (iconName: string) => {
  const iconClasses = "w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300";
  switch (iconName) {
    case 'sun':
    case 'إضاءة':
      return <Sun className={iconClasses} />;
    case 'user':
    case 'بورتريه':
      return <User className={iconClasses} />;
    case 'mountain':
    case 'مناظر طبيعية':
      return <Mountain className={iconClasses} />;
    case 'sliders':
    case 'تقنيات':
      return <SlidersHorizontal className={iconClasses} />;
    case 'settings':
    case 'معدات':
      return <Settings className={iconClasses} />;
    default:
      return <Folder className={iconClasses} />;
  }
};

function Descover_blogs({ posts: initialPosts }: DescoverBlogsProps) {
  const [categories, setCategories] = useState<DiscoverCategory[]>([]);

  useEffect(() => {
    if (initialPosts && initialPosts.length > 0) {
      setCategories(getDiscoverCategories(initialPosts));
    } else {
      const loadCategories = async () => {
        const posts = await getPosts();
        setCategories(getDiscoverCategories(posts));
      };
      loadCategories();
    }
  }, [initialPosts]);

  return (
    <section dir="rtl" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/5 mb-4 animate-fade-in">
            <span className="relative flex items-center gap-1.5 shrink-0">
              <span className="text-sm font-medium text-orange-400">التصنيفات</span>
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            استكشف حسب الموضوع
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/blog?category=${encodeURIComponent(category.title)}`}
              className="group relative flex flex-col items-start text-right p-7 rounded-2xl bg-[#141414] border border-neutral-800/80 hover:border-orange-500 hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-orange-500/25 overflow-hidden"
            >
              {/* Circular Arrow Button (appears on left in hover) */}
              <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ChevronLeft className="w-4 h-4" />
              </div>

              {/* Category Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-[#221610] border border-orange-500/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/20">
                {renderCategoryIcon(category.icon)}
              </div>

              {/* Category Title */}
              <h3 className="text-lg font-bold text-white mb-1.5 transition-colors duration-300">
                {category.title}
              </h3>

              {/* Category Post Count */}
              <p className="text-xs sm:text-sm text-neutral-400 group-hover:text-white/90 transition-colors duration-300">
                {category.count} مقالة
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Descover_blogs;

