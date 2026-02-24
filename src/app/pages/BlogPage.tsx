import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Container } from '../components/ui/Container';
import { SearchBar } from '../components/ui/SearchBar';
import { FilterTag } from '../components/ui/FilterTag';
import { BlogCard } from '../components/ui/BlogCard';
import { CardGrid } from '../components/sections/CardGrid';
import { useTranslation } from 'react-i18next';
import { useBlogPosts } from '../lib/useBlogPosts';

export function BlogPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith('tr') ? 'tr-TR' : 'en-US';
  const { posts, loading } = useBlogPosts(locale);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filterOptions = [
    { key: 'article', label: t('blog.filters.article') },
    { key: 'video', label: t('blog.filters.video') },
    { key: 'story', label: t('blog.filters.story') },
    { key: 'guide', label: t('blog.filters.guide') },
    { key: 'howto', label: t('blog.filters.howto') },
    { key: 'advice', label: t('blog.filters.advice') },
  ];

  const localizedPosts = posts.map((post) => ({
    ...post,
    categoryLabel: t(`blog.filters.${post.category}`),
  }));

  const filteredPosts = localizedPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !selectedFilter || post.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <MainLayout>
        <div className="flex w-full items-center justify-center py-40">
          <span className="font-['Overpass_Mono',sans-serif] text-gray-400 dark:text-gray-500 animate-pulse">
            {t('blog.loading', 'Yükleniyor...')}
          </span>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 bg-white dark:bg-gray-900 py-10">
        {/* Heading */}
        <section className="flex w-full flex-col items-center justify-center">
          <Container>
            <h1 className="font-['Overpass_Mono',sans-serif] text-[var(--text-3xl)] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] w-full">
              {t('blog.title')}
            </h1>
          </Container>
        </section>

        {/* Filter and Search */}
        <section className="flex w-full flex-col items-center justify-center">
          <Container>
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <FilterTag
                    key={option.key}
                    label={option.label}
                    isActive={selectedFilter === option.key}
                    onClick={() =>
                      setSelectedFilter(selectedFilter === option.key ? null : option.key)
                    }
                  />
                ))}
              </div>

              {/* Search */}
              <div className="w-full md:w-64">
                <SearchBar
                  placeholder={t('blog.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Blog Posts */}
        <section className="flex w-full flex-col items-center justify-center gap-8">
          <Container>
            {filteredPosts.length > 0 ? (
              <>
                {/* Hero Post */}
                <BlogCard
                  title={filteredPosts[0].title}
                  excerpt={filteredPosts[0].excerpt}
                  category={filteredPosts[0].categoryLabel}
                  image={filteredPosts[0].image}
                  slug={filteredPosts[0].slug}
                  author={filteredPosts[0].author}
                  date={filteredPosts[0].date}
                  size="large"
                />

                {/* Two Column Grid */}
                {filteredPosts.length > 1 && (
                  <CardGrid columns={2}>
                    {filteredPosts.slice(1, 3).map((post) => (
                      <BlogCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        category={post.categoryLabel}
                        image={post.image}
                        slug={post.slug}
                        author={post.author}
                        date={post.date}
                      />
                    ))}
                  </CardGrid>
                )}

                {/* Three Column Grid */}
                {filteredPosts.length > 3 && (
                  <CardGrid columns={3}>
                    {filteredPosts.slice(3).map((post) => (
                      <BlogCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        category={post.categoryLabel}
                        image={post.image}
                        slug={post.slug}
                        author={post.author}
                        date={post.date}
                      />
                    ))}
                  </CardGrid>
                )}
              </>
            ) : (
              <div className="flex w-full items-center justify-center py-20">
                <p className="font-['Overpass',sans-serif] text-lg text-gray-500 dark:text-gray-400">
                  {t('blog.noContent')}
                </p>
              </div>
            )}
          </Container>
        </section>
      </div>
    </MainLayout>
  );
}
