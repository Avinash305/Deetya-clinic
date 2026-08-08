import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';
import { clinicInfo, socialLinks } from '../../data/siteData';
import { telHref, mailHref } from '../../utils/links';

export default function TopBar({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={`fixed top-0 inset-x-0 z-[61] bg-primary-950 text-white transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8 sm:h-10">
          {/* Left: Phone always */}
          <a href={telHref()} className="flex items-center gap-1.5 hover:text-accent-300 transition-colors shrink-0">
            <FiPhone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="text-[11px] sm:text-sm font-medium whitespace-nowrap">{clinicInfo.phone}</span>
          </a>

          {/* Right: Timing always */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 text-primary-200">
              <FiClock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="text-[11px] sm:text-sm whitespace-nowrap">Mon-Sat 7AM-11PM</span>
            </div>
            {/* Desktop extras — shown progressively so tablets never overflow */}
            <a href={mailHref()} className="hidden sm:flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <FiMail className="w-3.5 h-3.5" />
              <span className="text-[11px] md:text-sm">{clinicInfo.email}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 ml-2 text-primary-200">
              <FiMapPin className="w-3.5 h-3.5" />
              <span className="text-sm">{clinicInfo.shortAddress}</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 ml-2">
              {socialLinks.map((s, i) => (
                /* Social profiles not live yet — rendered as non-clickable
                   placeholders so no dead links ship to production. Replace
                   `href` in siteData.socialLinks with real profile URLs to
                   activate them. */
                <span key={i} aria-label={s.label} className="text-primary-300 cursor-default" title={`${s.label} (coming soon)`}>
                  <span className="text-xs">{s.icon}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
