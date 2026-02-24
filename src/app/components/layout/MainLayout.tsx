import { ReactNode, useState, useEffect } from 'react';
import { ScrollRestoration, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from '../ui/CookieBanner';
import { DisclaimerSection } from '../sections';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      // Check localStorage and system preference
      const stored = localStorage.getItem('darkMode');
      if (stored !== null) return stored === 'true';
    } catch (e) {
      // localStorage unavailable (private browsing, quota exceeded, etc.)
      console.warn('localStorage unavailable:', e);
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Attempt to save to localStorage with error handling
    try {
      localStorage.setItem('darkMode', String(isDarkMode));
    } catch (e) {
      // localStorage unavailable - silently fail, state will reset on page reload
      console.warn('Failed to save theme preference:', e);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {isHomePage && <DisclaimerSection />}
      <Header onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
      <ScrollRestoration />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
