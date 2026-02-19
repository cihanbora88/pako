import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { t } from '../utils/translations';
import pakoRiderBadge from '@assets/svg/pako_rider_badge.svg';
import pakoRiderInterface from '@assets/images/pakorider_interface.png';
import { TextHeroSection } from '../components/sections/TextHeroSection';

export function PakoRiderPage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              Pako Rider
            </h1>
          </div>
        </section>

        {/* Rider description */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-8">
            <div className="flex flex-[1.5] flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako Rider uygulaması organik saha tecrübesinin dijital bir yansıması olarak Pako’ya
                gönül vermiş bisikletli kuryeler tarafından geliştirilmiştir. Pako Rider, sadece bir
                teslimat aracı değil; gücünü açık kaynak kodlu (Open-Source) felsefeden alan, yüksek
                performanslı ve şeffaf bir teknoloji platformudur. Kolektif bilinçle bisikletliler
                tarafından bisikletliler için geliştirilen Pako Rider yazılımı açık kaynaklıdır;
                herkes tarafından incelenebilir ve geliştirilebilir. Veri akışı gizli değilir.
                Bağımsız teknolojisi kooperatifin ortak değeridir.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako’nun kurye odaklı teknolojik vizyonu, kuryelerin ihtiyaçlarını doğrudan sahada
                gözlemleyerek çözümler üretir. Bu yazılım, topluluğun ortak aklıyla şekillenerek
                daha adil, şeffaf ve verimli bir çalışma ortamı sunmayı hedefler; algoritmanın
                değil, insanın öncelikli olduğu bir gelecek inşa eder.
              </p>
            </div>

            {/* Rider Badge */}
            <div className="flex flex-1 items-center justify-center lg:justify-end">
              <img
                src={pakoRiderBadge}
                alt="Pako Rider Badge"
                className="h-auto w-full max-w-[240px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Text Hero Section */}
        <TextHeroSection
          title={
            <>
              Açık kaynak kod, <span className="font-bold">şeffaf veri akışı</span>
              <br />
              ve dürüst ekonomik modeller
            </>
          }
        />

        {/* Interface Description Section */}
        <section className="flex w-full flex-col items-center px-4 py-12 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-20">
            {/* App screenshot */}
            <div className="flex flex-1 items-center justify-center">
              <img
                src={pakoRiderInterface}
                alt="Pako Rider uygulama arayüzü"
                className="h-auto w-full max-w-xs object-contain"
              />
            </div>

            {/* Text blocks */}
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Kolektif bilinçle bisikletliler tarafından bisikletliler için geliştirilen Pako
                Rider yazılımı açık kaynaklıdır; herkes tarafından incelenebilir ve
                geliştirilebilir. Veri akışı gizli değilir. Bağımsız teknolojisi kooperatifin ortak
                değeridir.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako Rider’ın yeni nesil yazılım anlayışı hızlı bir iş akışı oluşturur, organik
                gelişmiş algoritması ile havuzdaki işleri sahadaki kuryelere en makul şekilde
                tavsiye eder ve akıllı rotalar oluşturur. Ortak bir görev üzerinde çalışan kişilerin
                hedeflerine ulaşmalarına yardımcı olmak için tasarlanmıştır.
              </p>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="flex w-full flex-col items-center gap-6 px-4 py-8 text-center md:px-8">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
            {t('pakoRider.joinMovement')}
          </h2>
          <p className="max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            {t('pakoRider.joinDesc')}
          </p>
          <Link
            to="/topluluk"
            className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
          >
            {t('pakoRider.joinCommunity')}
          </Link>
        </section>

        {/* Community Invitation Section */}
        <section className="flex w-full flex-col items-center px-4 pb-16 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-8 lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako Rider ile başlattığımız harekete katıl, felsefemiz, ilkelerimiz hakkında daha
                fazla bilgi almak ve kullanım prensiplerini incelemek için topluluğa dahil ol.
                Amacımız Pako Rider’ın kullanımını herkes için mümkün kılmak ve kolaylaştırmak.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Saha oryantasyonu, Pako topluluk sistemi, saha koordinasyonunu ve operasyonu gibi
                konular hakkında konu başlıklarını ve uygulama hakkında aradığın tüm rehberleri
                orada bulacaksın. Katılımın, Pako Rider’ın geliştirilmesi için çok değerli,
                bisikletli adil bir teslimat sistemini birlikte geliştirmek isteyen herkesi topluluk
                sayfamıza üye olmaya davet ediyoruz.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
