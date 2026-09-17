import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer dir="rtl" className="bg-[#080808] border-t border-neutral-800/60 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-[#ff5a00] flex items-center justify-center text-white font-bold text-xl shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
                ع
              </div>
              <span className="text-2xl font-bold text-white">عدسة</span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#1f1510] flex items-center justify-center transition-all"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#1f1510] flex items-center justify-center transition-all"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#1f1510] flex items-center justify-center transition-all"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-xl bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-orange-500/50 hover:bg-[#1f1510] flex items-center justify-center transition-all"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-0.5 bg-[#ff5a00] rounded-full"></span>
              <h3 className="text-white font-bold text-base">استكشف</h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-400 transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-0.5 bg-[#ff5a00] rounded-full"></span>
              <h3 className="text-white font-bold text-base">التصنيفات</h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/blog?category=إضاءة" className="hover:text-orange-400 transition-colors">
                  إضاءة
                </Link>
              </li>
              <li>
                <Link to="/blog?category=بورتريه" className="hover:text-orange-400 transition-colors">
                  بورتريه
                </Link>
              </li>
              <li>
                <Link to="/blog?category=مناظر طبيعية" className="hover:text-orange-400 transition-colors">
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link to="/blog?category=تقنيات" className="hover:text-orange-400 transition-colors">
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated Newsletter (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-0.5 bg-[#ff5a00] rounded-full"></span>
              <h3 className="text-white font-bold text-base">ابقى على اطلاع</h3>
            </div>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-all text-right"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-2xl bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all cursor-pointer"
              >
                {subscribed ? 'تم الاشتراك!' : 'اشترك'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="flex items-center gap-1.5">
            <span>© 2026 عدسة. صنع بكل</span>
            <span className="text-orange-500">🧡</span>
            <span>جميع الحقوق محفوظة.</span>
          </p>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-neutral-400 transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/about" className="hover:text-neutral-400 transition-colors">
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
