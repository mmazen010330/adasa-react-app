import { List, Clock, Calendar, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ContentSection {
  title: string;
  paragraphs: string[];
}

interface ArticleSidebarProps {
  sections: ContentSection[];
  activeSectionIndex: number;
  onSelectSection: (index: number) => void;
  readTime: string;
  date: string;
}

function ArticleSidebar({
  sections,
  activeSectionIndex,
  onSelectSection,
  readTime,
  date,
}: ArticleSidebarProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-8">
      {/* Table of Contents Card */}
      {sections.length > 0 && (
        <div className="bg-[#121212]/95 border border-neutral-850 rounded-2xl p-6 shadow-xl shadow-black/40">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
            <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center">
              <List className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">محتويات المقال</h3>
          </div>

          <nav className="space-y-2">
            {sections.map((sec, idx) => {
              const isActive = activeSectionIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => onSelectSection(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-medium transition-all text-right cursor-pointer ${
                    isActive
                      ? 'bg-[#21140c] border border-orange-500/50 text-orange-400 font-bold shadow-sm shadow-orange-950'
                      : 'text-neutral-400 hover:text-white hover:bg-[#181818]'
                  }`}
                >
                  <span className="truncate ml-2">{sec.title}</span>
                  <span
                    className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] shrink-0 font-bold ${
                      isActive ? 'bg-[#ff5a00] text-white' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Quick Metadata Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#121212]/95 border border-neutral-850 rounded-2xl p-4 flex flex-col items-center text-center">
          <Clock className="w-5 h-5 text-orange-500 mb-2" />
          <span className="text-xs font-bold text-white mb-0.5">{readTime}</span>
          <span className="text-[11px] text-neutral-500">وقت القراءة</span>
        </div>
        <div className="bg-[#121212]/95 border border-neutral-850 rounded-2xl p-4 flex flex-col items-center text-center">
          <Calendar className="w-5 h-5 text-orange-500 mb-2" />
          <span className="text-xs font-bold text-white mb-0.5">{date}</span>
          <span className="text-[11px] text-neutral-500">تاريخ النشر</span>
        </div>
      </div>

      {/* Newsletter CTA Box */}
      <div className="bg-[#16120e] border border-orange-500/25 rounded-2xl p-6 text-center shadow-lg shadow-black/30">
        <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-3">
          <Mail className="w-5 h-5" />
        </div>
        <h4 className="text-base font-bold text-white mb-1.5">لا تفوت جديدنا</h4>
        <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
          اشترك للحصول على أحدث المقالات والنصائح الحصرية.
        </p>
        <Link
          to="/blog"
          className="w-full py-2.5 px-4 rounded-xl bg-[#ff5a00] hover:bg-[#e64e00] text-white font-bold text-xs shadow-md shadow-orange-500/25 transition-all block"
        >
          تصفح المزيد
        </Link>
      </div>
    </aside>
  );
}

export default ArticleSidebar;
