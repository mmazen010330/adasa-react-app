import { Target, Zap, Handshake, RefreshCw } from 'lucide-react';

const valuesData = [
  {
    id: 1,
    title: 'الجودة أولاً',
    description: 'محتوى مدروس ومكتوب بخبرة',
    icon: Target,
  },
  {
    id: 2,
    title: 'تركيز عملي',
    description: 'أمثلة واقعية يمكنك تطبيقها اليوم',
    icon: Zap,
  },
  {
    id: 3,
    title: 'المجتمع',
    description: 'تعلم مع آلاف المصورين',
    icon: Handshake,
  },
  {
    id: 4,
    title: 'دائماً محدث',
    description: 'أحدث الاتجاهات وأفضل الممارسات',
    icon: RefreshCw,
  },
];

function Ourvalus() {
  return (
    <section dir="rtl" className="relative py-20 sm:py-24 overflow-hidden bg-[#080808] text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title with orange pipes */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white flex items-center justify-center gap-3 mb-3">
          <span className="text-[#ff5a00] font-light text-2xl sm:text-3xl md:text-4xl">|</span>
          <span>قيمنا</span>
          <span className="text-[#ff5a00] font-light text-2xl sm:text-3xl md:text-4xl">|</span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg mb-12 sm:mb-16">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {valuesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#121212]/90 border border-neutral-850/80 rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/60 hover:bg-[#1b120c] hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4 text-[#ff5a00] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Ourvalus;
