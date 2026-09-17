import { BrowserRouter, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './assets/componants/navebar';
import Mainbage from './assets/pages/mainbage';
import The_blougbage from './assets/pages/the_blougbage';
import Whoarewe from './assets/pages/whoarewe';
import Cardchosen from './assets/pages/cardchosen';

// Automatically scrolls to top whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Global layout — Navbar renders once on every page
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* All pages share the same Navbar via Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Mainbage />} />
          <Route path="/blog" element={<The_blougbage />} />
          <Route path="/blog/:slug" element={<Cardchosen />} />
          <Route path="/article/:slug" element={<Cardchosen />} />
          <Route path="/about" element={<Whoarewe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
