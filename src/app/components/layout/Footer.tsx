import { Link } from 'react-router';
import svgPaths from '../../../imports/svg-9rloq76aef';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const footerMenu1 = [
    { label: t('footer.about'), path: '/hakkinda' },
    { label: t('footer.pakoRider'), path: '/pako-rider' },
    { label: t('footer.partnership'), path: '/isletmeler' },
    { label: t('footer.blog'), path: '/blog' },
  ];

  const footerMenu2 = [
    { label: t('footer.community'), path: '/topluluk' },
    { label: t('footer.pkoop'), path: '#' },
    { label: t('footer.support'), path: '/destek-ol' },
    { label: t('footer.help'), path: '/yardim' },
  ];

  const footerMenu3 = [
    { label: t('footer.faq'), path: '/yardim' },
    { label: t('footer.privacy'), path: '#' },
    { label: t('footer.cookies'), path: '/cerez-politikasi' },
    { label: t('footer.terms'), path: '#' },
    { label: t('footer.contact'), path: '/iletisim' },
  ];

  const socialLinks = [
    {
      name: 'Play',
      icon: svgPaths.p20d86580,
      href: '#',
      ariaLabel: 'Play Store',
    },
    {
      name: 'Mastodon',
      icon: svgPaths.p28240000,
      href: '#',
      ariaLabel: 'Mastodon',
    },
    {
      name: 'YouTube',
      icon: svgPaths.p32a85dc0,
      href: '#',
      ariaLabel: 'YouTube',
    },
    {
      name: 'GitHub',
      icon: svgPaths.p1916b400,
      href: '#',
      ariaLabel: 'GitHub',
    },
  ];

  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-[var(--container-max-width)] flex-wrap items-start justify-center gap-8 px-4 py-6 md:gap-12 md:px-8 lg:flex-nowrap lg:gap-20 lg:px-[var(--spacing-6xl)]">
        {/* Logo */}
        <div className="flex w-44 shrink-0 items-center justify-center">
          <div className="h-[43px] w-[124px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 131.134 43"
            >
              <g id="pako_logo">
                <g id="pako_logo_2">
                  <path
                    d={svgPaths.p13c0e400}
                    fill="#290079"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                  <path
                    d={svgPaths.p1b627800}
                    fill="#290079"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                  <path
                    d={svgPaths.p35ac7872}
                    fill="#290079"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                  <path
                    d={svgPaths.pc1cca00}
                    fill="#290079"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                  <path
                    d={svgPaths.paa7e180}
                    fill="var(--color-secondary)"
                    className="dark:fill-[var(--color-primary)]"
                  />
                  <path
                    d={svgPaths.p1bf53600}
                    fill="var(--color-secondary)"
                    className="dark:fill-[var(--color-primary)]"
                  />
                </g>
              </g>
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
                {social.name === 'GitHub' ? (
                  <path
                    clipRule="evenodd"
                    d={social.icon}
                    fill="var(--color-primary)"
                    fillRule="evenodd"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                ) : (
                  <path
                    d={social.icon}
                    fill="var(--color-primary)"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                )}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
