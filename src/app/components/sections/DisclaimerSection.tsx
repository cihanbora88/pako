import { useTranslation } from 'react-i18next';

export function DisclaimerSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#290079] text-white dark:bg-[#afe403] dark:text-black py-2 px-4 text-center">
      <p className="font-['Overpass_Mono'] text-sm font-medium">{t('home.disclaimer')}</p>
    </div>
  );
}
