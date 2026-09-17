import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Ccontactus() {
  return (
    <section dir="rtl" className="relative py-16 sm:py-24 bg-linear-to-b from-[#ff5500] via-[#ff6000] to-[#e64a00] overflow-hidden text-center">
      {/* Background glow & subtle accent overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white/10 via-transparent to-black/10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary Contact Button (Black) */}
          <a
            href="mailto:contact@adasa.com"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-black hover:bg-neutral-900 text-white font-bold text-sm sm:text-base shadow-lg shadow-black/25 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <span>تواصل معنا</span>
            <Mail className="w-4 h-4" />
          </a>

          {/* Secondary Explore Articles Button (Outline) */}
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl border border-white/80 hover:border-white hover:bg-white/15 text-white font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer"
          >
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Ccontactus;
