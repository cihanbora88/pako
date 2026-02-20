import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import svgPaths from '../../../imports/svg-9rloq76aef';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

export function Header({ onThemeToggle }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('tr') ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const menuItems = [
    { key: 'about', path: '/hakkinda', label: t('header.about') },
    { key: 'pakoRider', path: '/pako-rider', label: t('header.pakoRider') },
    { key: 'businesses', path: '/isletmeler', label: t('header.businesses') },
    { key: 'community', path: '/topluluk', label: t('header.community') },
    { key: 'contact', path: '/iletisim', label: t('header.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex h-20 max-w-[var(--container-max-width)] items-center justify-between px-4 md:px-8 lg:px-[var(--spacing-6xl)]">
        {/* Logo */}
        <Link to="/" className="shrink-0" aria-label={t('header.about')}>
          <div className="h-[60px] w-[150px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 150 60"
            >
              <g id="flash_logo">
                <path
                  d={svgPaths.pb335580}
                  fill="var(--color-primary)"
                  className="dark:fill-[var(--color-secondary)] transition-colors"
                  id="pako_flash"
                />
              </g>
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className="group flex flex-col items-center gap-2 px-4 py-2 transition-colors"
            >
              <span className="font-['Overpass_Mono',sans-serif] text-[var(--text-xl)] text-[var(--color-primary)] dark:text-[var(--color-secondary)] transition-colors group-hover:opacity-70">
                {item.label}
              </span>
              <div
                className={`h-1 w-full bg-[var(--color-secondary)] dark:bg-[var(--color-secondary)] transition-opacity ${
                  isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}
              />
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={onThemeToggle}
            className="flex h-6 w-6 items-center justify-center transition-transform hover:scale-110 active:scale-95"
            aria-label="Toggle dark mode"
          >
            <svg className="size-full" fill="none" viewBox="0 0 24 24">
              <path
                d={svgPaths.p3655b580}
                fill="var(--color-primary)"
                className="dark:fill-[var(--color-secondary)]"
              />
            </svg>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 font-['Overpass_Mono',sans-serif] text-[var(--text-sm)] font-bold transition-opacity hover:opacity-70 px-2"
            aria-label="Change language"
          >
            <span
              className={
                i18n.language.startsWith('tr')
                  ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                  : 'text-gray-400'
              }
            >
              TR
            </span>
            <span className="text-gray-400">|</span>
            <span
              className={
                i18n.language.startsWith('en')
                  ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                  : 'text-gray-400'
              }
            >
              EN
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-[var(--color-primary)] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--color-primary)] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--color-primary)] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white dark:bg-gray-900 lg:hidden">
          <div className="flex flex-col gap-2 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 font-['Overpass_Mono',sans-serif] text-[var(--color-primary)] dark:text-[var(--color-secondary)] transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive(item.path) ? 'bg-gray-100 dark:bg-gray-800' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-center gap-4 border-t border-gray-200 pt-4">
              <button
                onClick={onThemeToggle}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <path
                    d={svgPaths.p3655b580}
                    fill="var(--color-primary)"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                </svg>
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 font-['Overpass_Mono',sans-serif] text-[var(--text-lg)] font-bold transition-opacity hover:opacity-70 px-4 py-2"
                aria-label="Change language"
              >
                <span
                  className={
                    i18n.language.startsWith('tr')
                      ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                      : 'text-gray-400'
                  }
                >
                  TR
                </span>
                <span className="text-gray-400">|</span>
                <span
                  className={
                    i18n.language.startsWith('en')
                      ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                      : 'text-gray-400'
                  }
                >
                  EN
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
