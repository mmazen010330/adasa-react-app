import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { getPosts, getAuthors, type Author } from '../../api/api';

function Ourteam() {
  const [teamMembers, setTeamMembers] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        // 1. Get data from API posts
        const posts = await getPosts();
        // 2. Extract unique authors from posts
        const authors = getAuthors(posts);
        setTeamMembers(authors);
      } catch (error) {
        console.error('Error fetching team from API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section dir="rtl" className="relative py-20 sm:py-28 overflow-hidden bg-[#080808] flex items-center justify-center text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-orange-500/30 bg-[#19110b]/80 text-orange-400 mb-4 shadow-sm shadow-orange-950/50 backdrop-blur-xs text-xs font-medium">
          <span>-</span>
          <span>فريقنا</span>
          <span>-</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
          تعرف على كتابنا
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-12 sm:mb-16">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
        </p>

        {/* Cards Grid: Rendered dynamically via map() over API data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {loading ? (
            // Loading skeleton cards
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#121212]/90 border border-neutral-850/80 rounded-2xl p-7 flex flex-col items-center justify-center text-center animate-pulse h-64"
              >
                <div className="w-20 h-20 rounded-full bg-neutral-800 mb-4" />
                <div className="w-28 h-4 bg-neutral-800 rounded mb-2" />
                <div className="w-20 h-3 bg-neutral-800/60 rounded mb-5" />
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800" />
                  <div className="w-8 h-8 rounded-lg bg-neutral-800" />
                  <div className="w-8 h-8 rounded-lg bg-neutral-800" />
                </div>
              </div>
            ))
          ) : (
            // Static card design applied to each API author item
            teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative bg-[#121212]/90 border border-neutral-850/80 rounded-2xl p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/60 hover:bg-[#1b120c] hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer"
              >
                {/* Avatar with Verified Check Badge */}
                <div className="relative mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-neutral-800 group-hover:border-orange-500/60 transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-[#ff5a00] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#121212] shadow-sm shadow-orange-500/40">
                    ✓
                  </span>
                </div>

                {/* Author Name */}
                <h3 className="text-lg font-bold text-white mb-1 transition-colors group-hover:text-white">
                  {member.name}
                </h3>

                {/* Author Role */}
                <p className="text-xs text-[#ff5a00] font-medium mb-5">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedin || 'https://linkedin.com'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800/80 text-neutral-500 hover:text-white hover:border-orange-500/50 hover:bg-[#20140c] flex items-center justify-center transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.github || 'https://github.com'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800/80 text-neutral-500 hover:text-white hover:border-orange-500/50 hover:bg-[#20140c] flex items-center justify-center transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.twitter || 'https://x.com'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800/80 text-neutral-500 hover:text-white hover:border-orange-500/50 hover:bg-[#20140c] flex items-center justify-center transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Ourteam;
