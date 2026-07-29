import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';
import { clinicInfo, socialLinks } from '../../data/siteData';

export default function TopBar() {
  return (
    <>
      {/* Mobile top bar - always visible on small screens */}
      <div className="lg:hidden bg-gradient-to-r from-primary-800 to-primary-900 text-white text-[10px] xs:text-xs py-1.5 px-3 xs:px-4">
        <div className="flex items-center justify-center gap-2 xs:gap-4">
          <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-1 xs:gap-1.5 hover:text-accent-300 transition-colors">
            <FiPhone className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
            <span className="font-medium whitespace-nowrap">{clinicInfo.phone}</span>
          </a>
          <div className="items-center gap-1 xs:gap-1.5 text-primary-300 hidden xs:flex">
            <FiClock className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
            <span className="whitespace-nowrap">Mon-Sat 8AM-9PM</span>
          </div>
        </div>
      </div>

      {/* Desktop top bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-900 via-primary-950 to-primary-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent-300 transition-colors duration-200">
              <FiPhone className="w-3.5 h-3.5" />
              <span>{clinicInfo.phone}</span>
            </a>
            <a href={`mailto:${clinicInfo.email}`} className="flex items-center gap-2 hover:text-accent-300 transition-colors duration-200">
              <FiMail className="w-3.5 h-3.5" />
              <span>{clinicInfo.email}</span>
            </a>
            <div className="flex items-center gap-2 text-primary-200">
              <FiClock className="w-3.5 h-3.5" />
              <span>{clinicInfo.workingHours.weekday}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 mr-3 text-primary-200">
              <FiMapPin className="w-3.5 h-3.5" />
              <span>{clinicInfo.shortAddress}</span>
            </div>
            <div className="h-4 w-px bg-primary-700" />
            <div className="flex items-center gap-3 ml-1">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} className="hover:text-accent-300 transition-colors duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
