import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from '../ui/CookieBanner';
import { DisclaimerSection } from '../sections';
import { useTheme } from '../../context/ThemeContext';

export function MainLayout() {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {isHomePage && <DisclaimerSection />}
      <Header onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
      <ScrollRestoration />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
