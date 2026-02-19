// Simple i18n implementation following next-intl pattern
// In production, this would be replaced with next-intl or react-i18next

type Translations = {
  [key: string]: string | Translations;
};

const translations: { [locale: string]: Translations } = {
  tr: {
    header: {
      about: 'Hakkında',
      pakoRider: 'Pako Rider',
      businesses: 'İşletmeler',
      community: 'Topluluk',
      contact: 'İletişim',
    },
    footer: {
      about: 'Hakkında',
      pakoRider: 'Pako Rider',
      partnership: 'İş Birliği',
      blog: 'Blog',
      community: 'Topluluk',
      pkoop: 'PKOOP',
      support: 'Destek ol',
      help: 'Yardım',
      faq: 'SSS',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları',
      contact: 'İletişim',
    },
    blog: {
      title: 'Blog',
      filters: {
        article: 'yazı',
        video: 'video',
        story: 'hikaye',
        guide: 'rehber',
        howto: 'nasıl yapılır',
        advice: 'tavsiye',
      },
      search: 'Ara...',
    },
    help: {
      title: 'Yardım',
      description:
        'Yardım için buradayız. PakoAI ile sohbet başlatın, topluluktan destek alın, kaynakları inceleyin ve çözüm bulun.',
      community: 'Topluluk',
      communityDesc: "Pako'lardan destek alın, öğrenin",
      join: 'katıl',
      pakoAI: 'PakoAI ile sohbet',
      pakoAIDesc:
        'Pako hakkında bir AI modeli geliştirdik, ona soru sorabilir ve çözüm bulabilirsin.',
      start: 'başlat',
      resources: 'Kaynaklar',
      resourcesDesc: 'Topluluk tarafından oluşturulan belgeleri burada bulabilirsin',
      explore: 'incele',
    },
    support: {
      title: 'Destek ol',
      repoTitle: 'Repoya katkıda bulun',
      repoDesc:
        'Yazılımı incele, katkıda bulun ayrıca görüş ve önerilerini bizimle paylaşmayı unutma.',
      github: 'github',
      bankAccounts: 'Banka Hesapları',
      bankAccountsDesc: "Bağış için PKOOP'un aşağıdaki banka hesaplarını kullanabilirsin.",
      bank1: 'Banka 1',
      bank2: 'Banka 2',
    },
    contact: {
      title: 'İletişim',
      description:
        'Görüş, öneri ve talepleriniz için iletişim kutusunu kullannın, e-mail adresimize posta gönderin veya iletişim numaramızı arayın.',
      name: 'İsim',
      subject: 'Başlık',
      topic: 'Konu',
      email: 'E-mail',
      phone: 'Telefon',
      message: 'Mesaj',
      send: 'gönder',
      note: 'Ekibimiz gönüllülük esasıyla çalışır, bir arkadaşımız en yakın sürede gönüllülük esasıyla mesajınızı yanıtlayacaktır.',
    },
    businesses: {
      title: 'İşletmeler',
      ctaTitle: 'Pako ile tanış',
      ctaDesc:
        'Pako Rider ile geliştirmekte olduğumuz teslimat sistemi hakkında daha fazla bilgi al',
      start: 'başla',
      contactTitle:
        'Daha fazla bilgi almak için bizimle iletişime geçin veya irtibat bilginizi paylaşın, bir ekip arkadaşımız en yakın sürede size ulaşacaktır.',
      contactBtn: 'iletişim',
    },
    pakoRider: {
      title: 'Pako Rider',
      joinCommunity: 'Topluluğa katıl',
      joinDesc: 'Geleneksel Pako yolunu öğren ve kendi bölgende patronsuz çalış.',
      createAccount: 'Hesap oluştur',
      joinMovement: 'Harekete Katıl!',
    },
  },
  en: {
    header: {
      about: 'About',
      pakoRider: 'Pako Rider',
      businesses: 'Businesses',
      community: 'Community',
      contact: 'Contact',
    },
    footer: {
      about: 'About',
      pakoRider: 'Pako Rider',
      partnership: 'Partnership',
      blog: 'Blog',
      community: 'Community',
      pkoop: 'PKOOP',
      support: 'Support',
      help: 'Help',
      faq: 'FAQ',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
    },
    // Add more English translations...
  },
};

let currentLocale = 'tr';

export const setLocale = (locale: string) => {
  currentLocale = locale;
};

export const getLocale = () => currentLocale;

export const t = (key: string): string => {
  const keys = key.split('.');
  let value: unknown = translations[currentLocale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
};
