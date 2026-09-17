import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  LayoutGrid,
  List,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Newspaper,
  Calendar,
} from 'lucide-react';
import { getPosts, type Post } from '../../api/api';

const CATEGORIES = [
  'جميع المقالات',
  'إضاءة',
  'بورتريه',
  'مناظر طبيعية',
  'تقنيات',
  'معدات',
];

const POSTS_PER_PAGE = 6;

function Mainbluglayout() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') && CATEGORIES.includes(searchParams.get('category')!)
      ? searchParams.get('category')!
      : 'جميع المقالات'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);

  // Sync category when URL search params change (e.g. when clicked from footer)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
      setCurrentPage(1);
    }
  }, [searchParams]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'جميع المقالات' ||
        post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Reset pagination when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <section dir="rtl" className="bg-[#080808] py-12 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: Search and Categories */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Categories Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#ff5a00] text-white shadow-md shadow-orange-500/25 font-bold'
                      : 'bg-[#141414] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في المقالات..."
              className="w-full px-4 py-2.5 pr-10 rounded-xl bg-[#141414] border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-all text-right"
            />
            <Search className="w-4 h-4 text-neutral-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* View Switcher and Count Bar */}
        <div className="flex items-center justify-between py-6">
          {/* Articles Count (Right in RTL) */}
          <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
            <span>عرض</span>
            <span className="font-bold text-white">{filteredPosts.length}</span>
            <span>مقالات</span>
            <Newspaper className="w-4 h-4 text-orange-500" />
          </div>

          {/* View Mode Toggle Buttons (Left in RTL) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141414] border border-neutral-800/90 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="عرض الشبكة"
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#21140c] border border-orange-500/50 text-[#ff5a00] shadow-sm shadow-orange-950'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="عرض القائمة"
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-[#21140c] border border-orange-500/50 text-[#ff5a00] shadow-sm shadow-orange-950'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Posts Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#121212] border border-neutral-850 rounded-2xl h-96 animate-pulse"
              />
            ))}
          </div>
        ) : currentPosts.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <Newspaper className="w-12 h-12 text-neutral-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">لا توجد مقالات</h3>
            <p className="text-neutral-400 text-sm">
              لم يتم العثور على أي مقالات تطابق بحثك أو التصنيف المحدد.
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-[#121212] border border-neutral-850 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-orange-500/5"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge on Image */}
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2.5 line-clamp-2 leading-snug">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-neutral-400 line-clamp-2 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author & Action Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-850/60">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-neutral-800"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {post.author.name}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {post.author.role}
                        </span>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <Link
                      to={`/blog/${post.slug}`}
                      aria-label="قراءة المقال"
                      className="w-8 h-8 rounded-full bg-[#1c140e] border border-orange-500/20 text-orange-500 flex items-center justify-center group-hover:bg-[#ff5a00] group-hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* List View Layout */
          <div className="flex flex-col gap-5">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-[#121212] border border-neutral-850 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col md:flex-row hover:-translate-y-0.5 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-orange-500/5"
              >
                {/* Content Side (Right in RTL) */}
                <div className="p-6 flex flex-col justify-between flex-1 order-2 md:order-1">
                  <div>
                    {/* Header meta & category */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2 leading-snug">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer with author and read link */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-850/60 mt-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-neutral-800"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {post.author.name}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {post.author.role}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    >
                      <span>اقرأ المقال</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Image Side (Left in RTL) */}
                <div className="relative w-full md:w-80 lg:w-96 h-52 md:h-auto shrink-0 overflow-hidden bg-neutral-900 order-1 md:order-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              {/* Prev Button (Right arrow in RTL) */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="الصفحة السابقة"
                className="w-9 h-9 rounded-xl bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center justify-center ${
                      isActive
                        ? 'bg-[#ff5a00] text-white font-bold shadow-md shadow-orange-500/25'
                        : 'bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next Button (Left arrow in RTL) */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="الصفحة التالية"
                className="w-9 h-9 rounded-xl bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Page Count Info */}
            <span className="text-xs text-neutral-500 font-medium">
              صفحة {currentPage} من {totalPages}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Mainbluglayout;
