import { useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../Navbar/TopBar';
import PageLoader from '../PageLoader/PageLoader';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';
import WhatsAppWidget from '../WhatsAppWidget/WhatsAppWidget';

export default function Layout() {
  const location = useLocation();
  const [pageKey, setPageKey] = useState(0);
  const [topBarHidden, setTopBarHidden] = useState(false);
  const lastScrollRef = useRef(window.scrollY);

  useEffect(() => {
    // Trigger re-mount animation when route changes
    setPageKey((k) => k + 1);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > lastScrollRef.current;
      let newHidden: boolean | undefined;
      // Hide TopBar when scrolling down past a small threshold
      if (isScrollingDown && currentScroll > 80) {
        newHidden = true;
      } else if (!isScrollingDown) {
        // Show TopBar when scrolling up
        newHidden = false;
      }
      if (newHidden !== undefined) {
        setTopBarHidden(newHidden);
        document.documentElement.dataset.topbarHidden = newHidden ? 'true' : 'false';
      }
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      <ScrollToTop />
      <TopBar hidden={topBarHidden} />
      <Navbar topBarHidden={topBarHidden} />
      <main
        key={pageKey}
        className={`animate-fade-in transition-all duration-300 min-h-[65vh] ${
          topBarHidden
            ? 'pt-14 sm:pt-16 lg:pt-20'
            : 'pt-[88px] sm:pt-[104px] lg:pt-[120px]'
        }`}
      >
        {/* Suspense sits around the page content (not the whole shell) so the
            navbar/footer stay visible while a lazy page chunk loads. */}
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
