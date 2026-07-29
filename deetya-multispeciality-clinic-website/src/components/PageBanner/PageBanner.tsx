import { Link } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; path?: string }[];
  bgImage?: string;
}

export default function PageBanner({ title, subtitle, breadcrumbs, bgImage }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      {bgImage ? (
        <div className="relative w-full min-h-[240px] xs:min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[480px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full animate-kenburns">
            <img src={bgImage} alt="" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-primary-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 xs:mb-3 animate-fade-in-up drop-shadow-lg">{title}</h1>
              <p className="text-white/80 text-xs xs:text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-3 xs:mb-4 animate-fade-in-up drop-shadow" style={{ animationDelay: '0.1s' }}>{subtitle}</p>
              <nav className="flex items-center justify-center gap-2 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }} aria-label="breadcrumb">
                <Link to="/" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"><FiHome className="w-3.5 h-3.5" /><span>Home</span></Link>
                {breadcrumbs.map((bc, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <FiChevronRight className="w-3.5 h-3.5 text-white/40" />
                    {bc.path ? <Link to={bc.path} className="text-white/70 hover:text-white transition-colors">{bc.label}</Link> : <span className="text-white font-medium">{bc.label}</span>}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 lg:py-28">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 xs:mb-4 animate-fade-in-up">{title}</h1>
            <p className="text-primary-200 text-xs xs:text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-4 xs:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{subtitle}</p>
            <nav className="flex items-center justify-center gap-2 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }} aria-label="breadcrumb">
              <Link to="/" className="flex items-center gap-1.5 text-primary-300 hover:text-white transition-colors"><FiHome className="w-3.5 h-3.5" /><span>Home</span></Link>
              {breadcrumbs.map((bc, i) => (
                <span key={i} className="flex items-center gap-2">
                  <FiChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  {bc.path ? <Link to={bc.path} className="text-primary-300 hover:text-white transition-colors">{bc.label}</Link> : <span className="text-white font-medium">{bc.label}</span>}
                </span>
              ))}
            </nav>
          </div>
        </div>
      )}
    </section>
  );
}
