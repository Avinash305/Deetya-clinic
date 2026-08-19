import { lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceCategoryDetailPage from './pages/ServiceCategoryDetailPage';

// Route-level code splitting: most pages load only when their route is
// visited — except the most-visited pages (Home, Services) and the home-care
// category pages (one small component, serves 11 URLs), which are eager so
// their content paints with the main bundle (better LCP, no layout shift
// from a late page mount).

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const DoctorDetailPage = lazy(() => import('./pages/DoctorDetailPage'));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'));
const HealthPackagesPage = lazy(() => import('./pages/HealthPackagesPage'));

// The lazy pages render inside <Layout>, which wraps <Outlet /> in its own
// <Suspense> — so the navbar/footer stay visible while a page chunk loads.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/services/category/:slug" element={<ServiceCategoryDetailPage />} />
          <Route path="/health-packages" element={<HealthPackagesPage />} />
          <Route path="/packages/:slug" element={<PackageDetailPage />} />
          <Route path="/doctors/:slug" element={<DoctorDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
