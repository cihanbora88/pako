import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Container } from '../components/ui/Container';
import { SearchBar } from '../components/ui/SearchBar';
import { FilterTag } from '../components/ui/FilterTag';
import { BlogCard } from '../components/ui/BlogCard';
import { CardGrid } from '../components/sections/CardGrid';
import { blogPosts, BlogPost } from '../data/blog-posts';
import { t } from '../utils/translations';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filters = [
    t('blog.filters.article'),
    t('blog.filters.video'),
    t('blog.filters.story'),
    t('blog.filters.guide'),
    t('blog.filters.howto'),
    t('blog.filters.advice'),
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                {filters.map((filter) => (
                  <FilterTag
                    key={filter}
                    label={filter}
                    isActive={selectedFilter === filter}
                    onClick={() => setSelectedFilter(selectedFilter === filter ? null : filter)}
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
                  {...filteredPosts[0]}
                  size="large"
                />

                {/* Two Column Grid */}
                {filteredPosts.length > 1 && (
                  <CardGrid columns={2}>
                    {filteredPosts.slice(1, 3).map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </CardGrid>
                )}

                {/* Three Column Grid */}
                {filteredPosts.length > 3 && (
                  <CardGrid columns={3}>
                    {filteredPosts.slice(3).map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </CardGrid>
                )}
              </>
            ) : (
              <div className="flex w-full items-center justify-center py-20">
                <p className="font-['Overpass',sans-serif] text-lg text-gray-500 dark:text-gray-400">
                  Aramanıza uygun içerik bulunamadı.
                </p>
              </div>
            )}
          </Container>
        </section>
      </div>
    </MainLayout>
  );
}