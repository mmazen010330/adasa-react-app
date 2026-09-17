import { useState } from 'react';
import { Mail } from 'lucide-react';

function Subscribetous() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section dir="rtl" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#141414] border border-neutral-800/80 p-8 sm:p-12 md:p-16 flex flex-col items-center text-center shadow-2xl overflow-hidden">
          {/* Subtle Orange Glow in Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Top Mail Icon */}
          <div className="relative w-14 h-14 rounded-2xl bg-[#ff5a00] flex items-center justify-center text-white shadow-lg shadow-orange-500/30 mb-6 animate-fade-in">
            <Mail className="w-7 h-7" />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            اشترك في <span className="text-[#ff5a00]">نشرتنا الإخبارية</span>
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 mb-8"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              className="grow w-full px-5 py-3.5 rounded-xl bg-[#0d0d0d] border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-right"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-sm shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
            >
              {subscribed ? 'تم الاشتراك!' : 'اشترك الآن'}
            </button>
          </form>

          {/* Trust proof & Features */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-neutral-500">
            {/* Avatars */}
            <div className="flex items-center -space-x-2 space-x-reverse">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Member"
                className="w-7 h-7 rounded-full border-2 border-[#141414] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                alt="Member"
                className="w-7 h-7 rounded-full border-2 border-[#141414] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Member"
                className="w-7 h-7 rounded-full border-2 border-[#141414] object-cover"
              />
            </div>

            <span className="font-semibold text-neutral-300">
              انضم لـ +10,000 مصور
            </span>
            <span className="text-neutral-600">•</span>
            <span>بدون إزعاج</span>
            <span className="text-neutral-600">•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribetous;
