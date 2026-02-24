export interface Author {
  name: string;
  picture?: string;
  bio?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: 'article' | 'video' | 'story' | 'guide' | 'howto' | 'advice';
  image?: string;
  slug: string;
  date: string;
  content?: string;
  author: Author;
}

const defaultAuthor: Author = {
  name: 'Pako Ekibi',
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Kısa Pako tarihi',
    excerpt: "bir fikir olarak Pako'nun nasıl ortaya çıktığı ve geliştiği hakkında...",
    category: 'article',
    slug: 'kisa-pako-tarihi',
    date: '2024-01-15',
    author: defaultAuthor,
  },
  {
    id: 2,
    title: 'Platformlar ile çalışamayan işletme Pako ile komisyonsuz teslimat...',
    excerpt:
      "Resmi kurumlar platformların talep ettiği haksız komisyonu fatura edemiyorlar ve dolayısla platformlar üzerinden sipariş almaları imkansızlaşıyor. Pako'nun şeffaf...",
    category: 'article',
    slug: 'komisyonsuz-teslimat',
    date: '2024-01-20',
    author: defaultAuthor,
  },
  {
    id: 3,
    title: 'Patikalar beliriyor',
    excerpt:
      'Kolektifimizle birlikte ormanlarımızda parkur açtık! Gençlerimizin dağ bisikletleriyle antreman yapmaları için hep birlikte kazma, kürek, tırpan ve çapaları alıp...',
    category: 'story',
    slug: 'patikalar-beliriyor',
    date: '2024-02-01',
    author: defaultAuthor,
  },
  {
    id: 4,
    title: 'PakoBike ile tümsekler engel değil',
    excerpt:
      'Yerel ve özelleştirilmiş üretim demişken bisikletten daha iyi bir üretim aracı bulamazdık. Kuryelerimizin karşılaştığı zorlu yol şartlarına uygun bir bisiklet tasarımı...',
    category: 'article',
    slug: 'pakobike-tumsekler',
    date: '2024-02-10',
    author: defaultAuthor,
  },
  {
    id: 5,
    title: 'Bisikletinizle iyi geçinmenin püf noktaları',
    excerpt:
      'Evet doğru ciddi bir ilişkidesiniz. Bu ilişkinin her iki taraf için de sağlıklı yaşanması için bu rehberi hazırladık...',
    category: 'guide',
    slug: 'bisiklet-bakim-rehberi',
    date: '2024-02-15',
    author: defaultAuthor,
  },
  {
    id: 6,
    title: 'Topluluk olarak başardık',
    excerpt:
      'Bir topluluk olarak hareket etmenin en güzel hediyelerinden biri tüm ilçemize hayırlı olsun. PKOOP bisiklet merkezine bisikletlerinizi emanet edebilir, tamir ettirebilirsiniz.',
    category: 'story',
    slug: 'topluluk-basarisi',
    date: '2024-02-20',
    author: defaultAuthor,
  },
  {
    id: 7,
    title: 'Bisikletle Kargo Taşımanın İpuçları',
    excerpt:
      'Bisikletle etkili kargo taşıma tekniklerini öğrenin. Yükü dengeli dağıtmak ve güvenli sürüş için pratik öneriler...',
    category: 'howto',
    slug: 'kargo-tasima-ipuclari',
    date: '2024-03-01',
    author: defaultAuthor,
  },
  {
    id: 8,
    title: 'Yağmurda Bisiklet Sürüşü',
    excerpt:
      'Yağışlı havalarda güvenli bisiklet sürüşü için dikkat edilmesi gerekenler ve ekipman tavsiyeleri...',
    category: 'advice',
    slug: 'yagmurda-bisiklet',
    date: '2024-03-05',
    author: defaultAuthor,
  },
  {
    id: 9,
    title: 'Pako Rider Kullanım Kılavuzu',
    excerpt:
      'Pako Rider uygulamasını en verimli şekilde kullanmak için detaylı adım adım rehber...',
    category: 'guide',
    slug: 'pako-rider-kilavuz',
    date: '2024-03-10',
    author: defaultAuthor,
  },
  {
    id: 10,
    title: 'Kurye Deneyimleri: Bir Günde',
    excerpt: 'Pako kuryelerinden birinin gözünden bir çalışma gününün hikayesi ve yaşananlar...',
    category: 'story',
    slug: 'kurye-deneyimi',
    date: '2024-03-15',
    author: defaultAuthor,
  },
];
