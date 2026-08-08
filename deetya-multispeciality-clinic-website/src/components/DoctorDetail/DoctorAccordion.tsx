import { useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import GlassCard from './DoctorGlassCard';

interface DoctorAccordionProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/** Smooth height-animated accordion (conditions / FAQ on doctor detail). */
export default function DoctorAccordion({ icon, iconBg, title, children, defaultOpen = false }: DoctorAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open, children]);

  return (
    <GlassCard className="!p-0 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${iconBg} flex items-center justify-center text-white shrink-0 shadow-sm`}
          >
            {icon}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-primary-950 leading-snug">
            {title}
          </span>
        </div>
        <div
          className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180 bg-primary-100' : ''
          }`}
        >
          <FiChevronDown
            className={`w-4 h-4 transition-colors duration-300 ${
              open ? 'text-primary-600' : 'text-gray-400'
            }`}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: height ? `${height}px` : '0px' }}
      >
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
          <div className="pt-3 border-t border-gray-100">{children}</div>
        </div>
      </div>
    </GlassCard>
  );
}
