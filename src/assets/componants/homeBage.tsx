import { Link } from 'react-router-dom';

function HomeBage() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse [animation-delay:-2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-124 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
 <div className="section-label inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/5 animate-fade-in">
  <span className="relative flex items-center gap-1.5 shrink-0">
  <span className="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            اكتشف
            <span className="bg-linear-to-l from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              {" "}فن{" "}
            </span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/blog"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-linear-to-l from-orange-500 to-orange-600 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 hover:shadow-[0_15px_35px_-10px_rgba(249,115,22,0.8)] transition-all duration-200"
            >
              <span>استكشف المقالات</span>
              <svg
                className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-neutral-200 font-semibold hover:bg-neutral-800/90 hover:border-orange-500/50 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>اعرف المزيد</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-900/50 border border-neutral-700/40 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1" />
              <p className="text-2xl md:text-3xl font-bold bg-linear-to-l from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                +50
              </p>
              <p className="text-neutral-500 text-sm">مقالة</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-900/50 border border-neutral-700/40 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-1" />
              <p className="text-2xl md:text-3xl font-bold bg-linear-to-l from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                +10ألف
              </p>
              <p className="text-neutral-500 text-sm">قارئ</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-900/50 border border-neutral-700/40 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1" />
              <p className="text-2xl md:text-3xl font-bold bg-linear-to-l from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                4
              </p>
              <p className="text-neutral-500 text-sm">تصنيفات</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-900/50 border border-neutral-700/40 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1" />
              <p className="text-2xl md:text-3xl font-bold bg-linear-to-l from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                6
              </p>
              <p className="text-neutral-500 text-sm">كاتب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBage;