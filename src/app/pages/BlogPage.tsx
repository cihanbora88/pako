import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Container } from '../components/ui/Container';
import { SearchBar } from '../components/ui/SearchBar';
import { FilterTag } from '../components/ui/FilterTag';
import { BlogCard } from '../components/ui/BlogCard';
import { CardGrid } from '../components/sections/CardGrid';
import { blogPosts } from '../data/blog-posts';
import { useTranslation } from 'react-i18next';

export function BlogPage() {
  const { t } = useTranslation();
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

  const localizedPosts = (
    t('blog.posts', { returnObjects: true }) as Array<{
      title: string;
      excerpt: string;
      category: string;
      image: string;
    }>
  ).map((post, index) => {
    const originalPost = blogPosts[index];
    return {
      ...originalPost,
      title: post.title,
      excerpt: post.excerpt,
      categoryLabel: t(`blog.filters.${originalPost.category}`),
    };
  });

  const filteredPosts = localizedPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !selectedFilter || post.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

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
