interface DoctorSectionHeaderProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
}

/** Icon-tile + title + subtitle header used by every doctor-detail section. */
export default function DoctorSectionHeader({ icon, iconBg, title, subtitle }: DoctorSectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      <div
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-lg shadow-black/10 ring-4 ring-white/50 shrink-0`}
      >
        <div className="text-white">{icon}</div>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-950 leading-tight">
          {title}
        </h2>
        <p className="text-[10px] xs:text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
