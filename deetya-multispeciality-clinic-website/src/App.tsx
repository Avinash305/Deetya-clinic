import { lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Route-level code splitting: each page is loaded only when its route is
// visited, so the initial download contains just the app shell + the page
// the visitor opens (not all 7 pages at once).
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const DoctorDetailPage = lazy(() => import('./pages/DoctorDetailPage'));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'));

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
          <Route path="/packages/:slug" element={<PackageDetailPage />} />
          <Route path="/doctors/:slug" element={<DoctorDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
