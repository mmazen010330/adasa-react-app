import { Users, Newspaper, PenTool, BookOpen } from 'lucide-react';

function Ourobjectiv() {
  return (
    <section dir="rtl" className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#080808] flex items-center justify-center text-center">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[45px_45px] pointer-events-none" />

      {/* Center Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-70 bg-orange-500/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-[#19110b]/80 text-orange-400 mb-6 shadow-sm shadow-orange-950/50 backdrop-blur-xs">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] shadow-[0_0_8px_#ff5a00]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]/60" />
          </span>
          <span className="text-xs sm:text-sm font-medium">من نحن</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-white">مهمتنا هي</span>
          <span className="bg-linear-to-l from-orange-400 to-amber-500 bg-clip-text text-transparent">
            الإعلام والإلهام
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-12 sm:mb-16">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        {/* Stats 4-Card Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
          {/* Stat 1: Audience */}
          <div className="bg-[#121212]/90 border border-neutral-850/80 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center hover:border-orange-500/40 hover:bg-[#18120d] transition-all duration-300 shadow-lg shadow-black/40 group">
            <Users className="w-6 h-6 text-[#ff5a00] mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl sm:text-3xl font-black text-orange-400 mb-1.5 tracking-tight">
              +2 مليون
            </span>
            <span className="text-neutral-400 text-xs sm:text-sm font-medium">
              قارئ شهرياً
            </span>
          </div>

          {/* Stat 2: Published Articles */}
          <div className="bg-[#121212]/90 border border-neutral-850/80 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center hover:border-orange-500/40 hover:bg-[#18120d] transition-all duration-300 shadow-lg shadow-black/40 group">
            <Newspaper className="w-6 h-6 text-[#ff5a00] mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl sm:text-3xl font-black text-orange-400 mb-1.5 tracking-tight">
              500+
            </span>
            <span className="text-neutral-400 text-xs sm:text-sm font-medium">
              مقالة منشورة
            </span>
          </div>

          {/* Stat 3: Expert Writers */}
          <div className="bg-[#121212]/90 border border-neutral-850/80 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center hover:border-orange-500/40 hover:bg-[#18120d] transition-all duration-300 shadow-lg shadow-black/40 group">
            <PenTool className="w-6 h-6 text-[#ff5a00] mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl sm:text-3xl font-black text-orange-400 mb-1.5 tracking-tight">
              50+
            </span>
            <span className="text-neutral-400 text-xs sm:text-sm font-medium">
              كاتب خبير
            </span>
          </div>

          {/* Stat 4: Categories */}
          <div className="bg-[#121212]/90 border border-neutral-850/80 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center hover:border-orange-500/40 hover:bg-[#18120d] transition-all duration-300 shadow-lg shadow-black/40 group">
            <BookOpen className="w-6 h-6 text-[#ff5a00] mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl sm:text-3xl font-black text-orange-400 mb-1.5 tracking-tight">
              15+
            </span>
            <span className="text-neutral-400 text-xs sm:text-sm font-medium">
              تصنيف
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourobjectiv;
