import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Container } from './Container';
import { Button } from './button';

export function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl py-6 px-4">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-['Overpass',sans-serif] text-base text-black dark:text-white leading-relaxed">
                {t('cookiePolicy.banner.message')}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                to="/cerez-politikasi"
                className="font-['Overpass',sans-serif] text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-secondary)] transition-colors"
                onClick={() => setIsVisible(false)}
              >
                {t('cookiePolicy.banner.learnMore')}
              </Link>
              <Button
                variant="primary"
                onClick={handleAccept}
                className="rounded-full px-8 py-6 font-['Overpass_Mono',sans-serif] shadow-lg shadow-primary/20 hover:opacity-90 transition-all font-semibold"
              >
                {t('cookiePolicy.banner.accept')}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
