import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import girlRider from '@assets/images/pako_girl_sportsbg.png';
import iconKolektif from '@assets/icons/icon_kolektif.svg';
import iconYerel from '@assets/icons/icon_yerel.svg';
import iconDoga from '@assets/icons/icon_doga.svg';
import iconSeffaf from '@assets/icons/icon_seffaf.svg';
import { TextHeroSection } from '../components/sections/TextHeroSection';
import { PrinciplesSection } from '../components/sections/PrinciplesSection';

export function AboutPage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              Pako nedir?
            </h1>
          </div>
        </section>

        {/* About content with image */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-20 lg:px-20">
            {/* Image */}
            <div className="flex flex-1 items-center justify-center">
              <img
                src={girlRider}
                alt="Pako bisiklet kurye"
                className="h-auto w-full max-w-sm object-contain"
              />
            </div>

            {/* Content blocks */}
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako, PKOOP (Patronsuzlar Kooperatifi) çatısı altında geliştirilen, dayanışma
                ekonomisini ve ekolojik ulaşımı odağına alan bir teslimat ekosistemidir. Pako
                restoran kuryeliği yapar ve amacı restoranlarla bisikletlileri buluşturmak ve her
                iki taraf içinde şeffaf ve adil bir teslimat sistemini mümkün kılmaktır. Geleneksel
                kurye platformlarının aksine &quot;patronsuz&quot; bir yapı ile çalışan Pako,
                bisikletli kuryeleri birer işçi olarak değil, platformun ortağı ve bağımsız hizmet
                sağlayıcısı olarak konumlandırır. Yerelliği, komşuluğu ve karşılıklı güveni önemser.
                Kârı öncelemeyen, kolektif akılla hareket eden, sürdürülebilir ve doğa dostu bir
                ulaşım modeli mümkün der ve bisikletin bu modelin taşıyıcısı olabileceğine inanır;
                karbon ayak izini sıfıra indiren lojistik ağıyla, hızlı ve etik bir teslimat
                alternatifi sunar.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Topluluk tarafından yönetilen, merkeziyetsiz bir yapıya sahip olan Pako, adil
                çalışma koşulları ve yerel ekonomiyi desteklemek için çalışmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* Text Hero Section */}
        <TextHeroSection
          title={
            <>
              Sürdürülebilir, <span className="font-bold">komisyonsuz</span>
              <br />
              İşbirlikçi ve katılımcı çalışma modeli
            </>
          }
        />

        {/* Virtue section */}
        <section className="flex w-full flex-col items-center px-4 py-8 md:px-8">
          <div className="grid w-full max-w-[var(--content-max-width)] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
            {[
              {
                icon: iconKolektif,
                title: 'Kolektif',
                desc: 'Birlikte karar alır, birlikte yol alırız.',
              },
              {
                icon: iconYerel,
                title: 'Yerel',
                desc: 'Esnafla, üreticiyle, mahalleyle güçlü bağlar kurarız.',
              },
              {
                icon: iconDoga,
                title: 'Doğa Dostu',
                desc: 'Karbon salımı olmayan, sürdürülebilir bir ulaşım biçimiyle çalışırız.',
              },
              {
                icon: iconSeffaf,
                title: 'Şeffaf',
                desc: 'Her adımımız, birlikte inşa ettiğimiz bir güvenin parçasıdır.',
              },
            ].map((value) => (
              <div key={value.title} className="flex flex-col items-center gap-4 text-center">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="h-28 w-28 object-contain transition-transform hover:scale-105 md:h-32 md:w-32"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Overpass',sans-serif] text-lg font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-xl">
                    {value.title}
                  </h3>
                  <p className="font-['Overpass',sans-serif] text-sm font-light leading-relaxed text-black dark:text-white md:text-base">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Principles Section */}
        <section className="bg-white dark:bg-gray-900 w-full py-8 flex justify-center">
          <div className="max-w-[1440px] w-full">
            <PrinciplesSection />
          </div>
        </section>

        {/* Community and Culture Section */}
        <section className="flex w-full flex-col items-center px-4 py-12 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-8 lg:px-16">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl lg:text-2xl text-center md:text-left leading-tight">
              Pako&rsquo;yu mümkün kılan gönüllü bir topluluktur
            </h2>
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako&rsquo;nun sürekliliği ve geliştirilmesi, ilkeleri pek çok konuda birbiri ile
                örtüşen bir ekibin sıkı çalışması sonucudur. Pako&rsquo;da taşıdığımız şey sadece
                paket değil, ortak kültürdür. Pako, şehrin ritmine uyum sağlayarak &ldquo;festina
                lante&rdquo; (acele et ama yavaşça) anlayışıyla çalışır; böylece hem işletmelere hem
                de sahaya güven veren bir istikrar kurar. Bir girişim okulu olarak bireyi hayatın
                değişkenliklerine hazırlayan, ona ekonomiyi çekirdekten öğreten ve onun bilişsel
                yeteneklerini eğiten bir tarz Pako&rsquo;nun doğasında vardır. Bu varoluş biçimi
                bizim işimiz diğerlerinden biraz farklı kılar.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako herkes için değildir; macera severler, doğa insanları için uygun fakat işlerin
                kolayına kaçanlar için uygun değildir. Bu bağlamlarda Pako sürücüsü ana akımın
                dışında konumlanır.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
