import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

// SVG path data from real assets (assets/svg/footer_logo.svg, assets/icons/)
const logoP =
  'M53.3746 4.24072C52.0033 4.24072 38.0875 4.24072 38.0875 4.24072L26 30.8789H38.6969L41.8712 23.1845C51.2415 23.4893 58.7835 22.2704 61.9578 13.9666C65.4621 4.87557 57.2091 4.24072 53.3746 4.24072ZM50.5305 13.5603C49.9718 15.5156 47.7118 16.0235 44.6899 16.0235L46.7976 11.0971H49.5655C49.5655 11.0971 51.0892 11.6049 50.5305 13.5603Z';
const logoA =
  'M86.0313 30.6757L85.5234 4.24072H72.2678L51.5718 30.8789H64.2687L66.6811 26.8413H74.731L74.6294 30.6757H86.0313ZM71.2266 19.8579L76.0007 12.7477V19.8579H71.2266Z';
const logoK =
  'M85.4725 30.6757L96.5443 4.24072H107.565L104.01 12.7477L112.568 4.24072H124.909L111.4 16.9884L114.168 30.6757H102.233L100.582 20.569L96.5951 30.6757H85.4725Z';
const logoO =
  'M131.435 30.8535C138.774 30.8535 144.742 24.8859 144.742 17.5471C144.742 10.2083 138.774 4.24072 131.435 4.24072C124.097 4.24072 118.129 10.2083 118.129 17.5471C118.129 24.8859 124.097 30.8535 131.435 30.8535Z';
const logoBoltDot =
  'M140.806 8.12604C141.542 8.86246 142.202 9.70045 142.761 10.6146L157.134 0L140.806 8.12604Z';
const logoBoltStrike =
  'M139.231 13.2048C137.53 12.3922 135.778 11.8081 134.203 11.4018L120.922 18.0042L128.667 19.9595L102.131 42.6616L142.482 17.0392L135.93 15.6426L139.231 13.2048Z';

const iconPlaystore =
  'M22.4832 10.7053L6.75003 1.70252C6.52067 1.56877 6.25992 1.49829 5.99441 1.49829C5.7289 1.49829 5.46815 1.56877 5.23878 1.70252C5.01281 1.83209 4.82532 2.01938 4.69552 2.24523C4.56571 2.47107 4.49825 2.72735 4.50003 2.98783V21.0122C4.49929 21.2724 4.56764 21.5282 4.69809 21.7533C4.82854 21.9785 5.01642 22.165 5.24253 22.2938C5.4719 22.4275 5.73265 22.498 5.99816 22.498C6.26367 22.498 6.52442 22.4275 6.75378 22.2938L22.4832 13.2938C22.7153 13.1665 22.9089 12.9792 23.0437 12.7514C23.1786 12.5236 23.2498 12.2638 23.2498 11.9991C23.2498 11.7344 23.1786 11.4745 23.0437 11.2468C22.9089 11.019 22.7153 10.8317 22.4832 10.7044V10.7053ZM6.00003 19.9378V4.0622L13.9397 12L6.00003 19.9378ZM15 13.0603L16.7738 14.8341L8.47691 19.5835L15 13.0603ZM8.47503 4.41564L16.7747 9.16595L15 10.9397L8.47503 4.41564ZM18.1228 14.0625L16.0603 12L18.1228 9.93752L21.7257 12L18.1228 14.0625Z';
const iconMastodon =
  'M16.0002 17.24C18.5002 16.94 20.6902 15.4 21.0002 13.99C21.2797 12.1971 21.4135 10.3845 21.4002 8.56996C21.3302 4.22996 18.4802 2.99996 18.4802 2.99996C16.4016 2.26459 14.2037 1.9254 12.0002 1.99996C9.79666 1.9254 7.5987 2.26459 5.52018 2.99996C5.52018 2.99996 2.68018 4.22996 2.68018 8.56996V12.01C2.78018 16.25 3.46018 20.43 7.38018 21.47C8.8824 21.8901 10.4418 22.069 12.0002 22C13.2222 21.9676 14.4256 21.6922 15.5402 21.19L15.4702 19.55C14.3435 19.8775 13.1731 20.0293 12.0002 20C10.2002 19.94 8.29018 19.81 8.00018 17.6C7.98463 17.3902 7.98463 17.1797 8.00018 16.97C9.31481 17.2685 10.6534 17.4492 12.0002 17.51C13.3388 17.5336 14.6769 17.4433 16.0002 17.24ZM9.46018 7.43996C8.56018 7.43996 8.11018 7.97996 8.11018 9.05996V14.16H6.00018V8.89996C5.95061 7.97498 6.24241 7.06399 6.82018 6.33996C7.09446 6.01833 7.43685 5.76175 7.82255 5.58879C8.20824 5.41584 8.62758 5.33084 9.05018 5.33996C9.52323 5.31456 9.99457 5.41501 10.4162 5.63108C10.8378 5.84715 11.1945 6.17111 11.4502 6.56996L11.9702 7.43996L12.4902 6.56996C12.7458 6.17111 13.1026 5.84715 13.5242 5.63108C13.9458 5.41501 14.4171 5.31456 14.8902 5.33996C15.3128 5.33084 15.7321 5.41584 16.1178 5.58879C16.5035 5.76175 16.8459 6.01833 17.1202 6.33996C17.7195 7.05539 18.0329 7.96725 18.0002 8.89996V14.16H15.8902V9.05996C15.8902 7.97996 15.4402 7.43996 14.5402 7.43996C13.5402 7.43996 13.0302 8.07996 13.0302 9.35996V12.15H11.0002V9.35996C11.0002 8.07996 10.4602 7.43996 9.46018 7.43996Z';
const iconPeertube =
  'M11.9999 6.545V17.455L20.7269 12M3.27295 12V24L11.9999 17.455M3.27295 0V12L11.9999 6.545';

export function Footer() {
  const { t } = useTranslation();
  const footerMenu1 = [
    { label: t('footer.about'), path: '/hikayemiz' },
    { label: t('footer.pakoRider'), path: '/pako-rider' },
    { label: t('footer.partnership'), path: '/isletmeler' },
    { label: t('footer.blog'), path: '/blog' },
    { label: t('footer.press'), path: '/basin' },
  ];

  const footerMenu2 = [
    { label: t('footer.community'), path: '/topluluk' },
    { label: t('footer.pkoop'), path: '#' },
    { label: t('footer.support'), path: '/destek-ol' },
    { label: t('footer.help'), path: '/yardim' },
    { label: t('footer.contact'), path: '/iletisim' },
  ];

  const footerMenu3 = [
    { label: t('footer.privacy'), path: '/kvkk' },
    { label: t('footer.cookies'), path: '/cerez-politikasi' },
    { label: t('footer.terms'), path: '/kullanim-ilkeleri' },
  ];

  const socialLinks = [
    {
      name: 'Playstore',
      icon: iconPlaystore,
      href: '#',
      ariaLabel: 'Play Store',
    },
    {
      name: 'Mastodon',
      icon: iconMastodon,
      href: '#',
      ariaLabel: 'Mastodon',
    },
    {
      name: 'PeerTube',
      icon: iconPeertube,
      href: '#',
      ariaLabel: 'PeerTube',
    },
  ];

  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-[var(--container-max-width)] flex-wrap items-center justify-center gap-8 px-4 py-6 md:gap-12 md:px-8 lg:flex-nowrap lg:gap-20 lg:px-[var(--spacing-6xl)]">
        {/* Logo */}
        <div className="flex w-44 shrink-0 items-center justify-center">
          <div className="h-[43px] w-[176px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 176 43"
            >
              <path d={logoP} fill="#290079" className="dark:fill-white" />
              <path d={logoA} fill="#290079" className="dark:fill-white" />
              <path d={logoK} fill="#290079" className="dark:fill-white" />
              <path d={logoO} fill="#290079" className="dark:fill-white" />
              <path
                d={logoBoltDot}
                fill="var(--color-secondary)"
                className="dark:fill-[var(--color-secondary)]"
              />
              <path
                d={logoBoltStrike}
                fill="var(--color-secondary)"
                className="dark:fill-[var(--color-secondary)]"
              />
            </svg>
          </div>
        </div>

        {/* Menu Column 1 */}
        <nav className="flex min-w-44 flex-1 flex-col gap-1">
          {footerMenu1.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="font-['Overpass',sans-serif] font-light text-black dark:text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Menu Column 2 */}
        <nav className="flex min-w-44 flex-1 flex-col gap-1">
          {footerMenu2.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="font-['Overpass',sans-serif] font-light text-black dark:text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Menu Column 3 */}
        <nav className="flex min-w-44 flex-1 flex-col gap-1.5">
          {footerMenu3.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="font-['Overpass',sans-serif] font-light text-black dark:text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex min-w-44 flex-1 items-center justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.ariaLabel}
              className="transition-transform hover:scale-110 active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24">
                <path
                  d={social.icon}
                  fill="var(--color-primary)"
                  className="dark:fill-[var(--color-secondary)]"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
