import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';

export function BusinessesPage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-16 py-10">
        {/* Section 1: Intro */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
            <h1 className="font-['Overpass_Mono',sans-serif] text-[32px] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[42px]">
              İşletmeler
            </h1>
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Emeğiyle mekanlara ruh kazandıran, yemekleriyle ilham kaynağı olan işletmeler Pako
                için en öncelikli kitleyi oluşturur çünkü ‘yerellik’ kavramını ilkelerinin en başına
                koyan Pako kültür olarak mahallenin bisikletlilerinden oluşan yerel bir topluluktur.
                Amacımız bisikletin hızını, kooperatifin adaletini ve teknolojinin kolaylığını
                birleştirerek yerel esnafa ve kuryeye adil ve şeffaf bir çalışma modeli sunmaktır.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Merkeziyetsiz sistemimiz kuryelik modelini dönüştürüyor ve bu modeli her koşulda her
                ilçede uygulanabilir kılma yolunda gelişiyor. Pako ile tanışıp destek olarak ilkeli
                bir çalışma modelini geliştirmemize yardımcı olabilirsiniz.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                2019&apos;da pandemi döneminden beri sahada edindiği tecrübe ile bir çok kuryelik
                ağına eğitim veren Pako, geliştirdiği mobil uygulama Pako Rider ile merkeziyetsiz ve
                bağımsız restoran kuryeliğini teknolojik olarak mümkün kılmıştır.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Hero Statement */}
        <section className="flex w-full flex-col items-center px-4 py-16 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 text-center">
            <h2 className="font-['Overpass',sans-serif] text-2xl font-light leading-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl lg:text-3xl">
              Pako&rsquo;nun kâr amacı gütmeyen misyonu ve sosyal hareketinin bir parçası ol,
              <br />
              yerel üreticilerle <span className="font-bold">güçlü bağlar.</span>
            </h2>
          </div>
        </section>

        {/* Section 3: Yerel ağa katılın */}
        <section className="flex w-full flex-col items-center px-4 py-8 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
              Yerel ağa katılın
            </h2>
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako Türkiye&apos;nin dayanışmacı köklerinden, yerellikten ve organiklikten
                beslenir. Haksız iş düzeninin yükselişe geçtiği bir dönemde değer üreten ve eşsiz
                olan siz kıymetli esnaflara, global zincirin dışında kalan yerel üreticilere faydalı
                bir alternatif sunar. &lsquo;Farklı bir kuryelik modeli mümkün mü?&rsquo; sorusunu
                sorarak bisikletin bu modelin taşıyıcısı olduğuna inanır.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                2019&apos;da pandemi döneminden beri sahada edindiği tecrübe ile bir çok kuryelik
                ağına eğitim veren Pako, geliştirdiği mobil uygulama Pako Rider ile merkeziyetsiz ve
                bağımsız restoran kuryeliğini teknolojik olarak mümkün kılmıştır. Pako komisyonsuz
                restoran kuryeliği yapar, Pako Rider bölgedeki teslimat işlerini listeleyen bir
                &lsquo;havuz&rsquo; işlevi görür. Hizmet verdiğiniz bölgede bisikletli Pako
                ekibinden destek alarak adil ve şeffaf bir model sergileyen dayanışmaya katkı
                sağlamış olursunuz.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Pako ile tanış */}
        <section className="flex w-full flex-col items-center gap-8 px-4 py-12 text-center md:px-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
              Pako ile tanış
            </h2>
            <p className="max-w-xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              Pako Rider ile geliştirmekte olduğumuz teslimat sistemi
              <br />
              hakkında daha fazla bilgi al
            </p>
          </div>
          <Link
            to="/topluluk"
            className="rounded-lg bg-[#AFE403] px-8 py-3 font-['Overpass',sans-serif] text-xl font-bold tracking-tight text-[#290079] transition-all hover:scale-105 active:scale-[0.98] shadow-md"
          >
            başla
          </Link>
        </section>

        {/* Section 5: İş birliği prensipleri */}
        <section className="flex w-full flex-col items-center px-4 py-8 pb-20 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
              İş birliği prensipleri
            </h2>
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako, bir &quot;patron&quot; tarafından değil, emeğiyle değer üretenler tarafından
                yönetilen bir teknoloji platformudur. Pako&apos;nun kültürü, felsefesi ve iş
                modelinin öncelikle Pako sürücüsü ve ortaklık kurmayı amaçladığı işletme tarafından
                doğru anlaşılması gerekir. Türkiye&apos;nin dayanışmacı geçmişinden beslenen Pako
                gönüllülük esasına göre çalışır ve işletme ile kurduğu bu güven bağını muhafaza
                etmeyi amaçlarken araç olarak bisikleti kullanır.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                İşletmeci Pako ile iş birliği kurarak ilkeli bir hareketi, iş modelini destekleyiyor
                olduğunun farkında olmalıdır. Pako sürücüsünün her siparişi önemsediğini bilmeli ve
                yaşanabilecek aksaklıklar karşısında metanetli ve anlayışlı olması beklenir.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Contact Card */}
        <section className="flex w-full flex-col items-center px-4 pb-20 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center justify-between gap-8 rounded-2xl bg-[#290079] p-8 lg:flex-row lg:px-12 lg:py-10">
            <p className="max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-snug tracking-tight text-white md:text-xl">
              Daha fazla bilgi almak için bizimle iletişime geçin veya irtibat bilginizi paylaşın,
              bir ekip arkadaşımız en yakın sürede size ulaşacaktır.
            </p>
            <Link
              to="/iletisim"
              className="min-w-[140px] rounded-xl border-2 border-white px-8 py-3 text-center font-['Overpass',sans-serif] text-lg font-medium tracking-tight text-white transition-all hover:bg-white hover:text-[#290079] active:scale-[0.98]"
            >
              iletişim
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
