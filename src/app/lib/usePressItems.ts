import { useEffect, useState } from 'react';
import { contentfulClient } from './contentful';

export interface PressItem {
  id: string;
  source: string;
  title: string;
  date: string;
  url: string;
  type: 'news' | 'video' | 'documentary';
}

export function usePressItems(locale: string = 'tr-TR') {
  const [items, setItems] = useState<PressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    contentfulClient
      .getEntries({
        content_type: 'pressItem',
        locale,
        order: ['-fields.publishDate' as const],
      })
      .then((res) => {
        const typeMap: Record<string, PressItem['type']> = {
          news: 'news',
          video: 'video',
          documentary: 'documentary',
        };

        const mapped: PressItem[] = res.items.map((item) => {
          const fields = item.fields as Record<string, unknown>;
          const rawCategory = (fields['category'] as string) || 'news';

          return {
            id: item.sys.id,
            source: (fields['source'] as string) || '',
            title: (fields['title'] as string) || '',
            date: fields['publishDate']
              ? new Date(fields['publishDate'] as string).toISOString().split('T')[0]
              : '',
            url: (fields['url'] as string) || '#',
            type: typeMap[rawCategory] ?? 'news',
          };
        });
        setItems(mapped);
        setError(null);
      })
      .catch((err) => {
        console.error('Failed to fetch press items from Contentful:', err);
        setError('Could not load press coverage.');
      })
      .finally(() => setLoading(false));
  }, [locale]);

  return { items, loading, error };
}
