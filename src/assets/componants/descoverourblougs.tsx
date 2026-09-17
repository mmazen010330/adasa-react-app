import { Newspaper } from 'lucide-react';

function Descoverourblougs() {
  return (
    <section dir="rtl" className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#080808] flex items-center justify-center">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[45px_45px] pointer-events-none" />

      {/* Center Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-70 bg-orange-500/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-[#19110b]/80 text-orange-400 mb-6 shadow-sm shadow-orange-950/50 backdrop-blur-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] shadow-[0_0_8px_#ff5a00]" />
          <Newspaper className="w-3.5 h-3.5" />
          <span className="text-xs sm:text-sm font-medium">مدونتنا</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-3">
          <span className="text-white">استكشف</span>
          <span className="bg-linear-to-l from-orange-400 to-amber-500 bg-clip-text text-transparent">
            مقالاتنا
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </section>
  );
}

export default Descoverourblougs;
