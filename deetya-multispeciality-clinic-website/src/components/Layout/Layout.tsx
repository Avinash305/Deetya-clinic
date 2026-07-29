import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../Navbar/TopBar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';
import WhatsAppWidget from '../WhatsAppWidget/WhatsAppWidget';

export default function Layout() {
  const location = useLocation();
  const [pageKey, setPageKey] = useState(0);

  useEffect(() => {
    // Trigger re-mount animation when route changes
    setPageKey((k) => k + 1);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white antialiased">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main key={pageKey} className="animate-fade-in">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
