
import React, { useState, useMemo, useEffect } from 'react';
import { articles } from '../data/articles';
import { useAppContext } from '../contexts/AppContext';

import SearchBar from '../components/blog/SearchBar';
import BlogSidebar from '../components/blog/BlogSidebar';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import ArticleGrid from '../components/blog/ArticleGrid';

const ARTICLES_PER_PAGE = 6;

const Blog: React.FC = () => {
  const { t, language } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState<string>(t('common.all'));
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const sortedArticles = useMemo(() => 
    [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  const recentArticles = useMemo(() => sortedArticles.slice(0, 5), [sortedArticles]);

  const categories = useMemo(() => {
    const allCategories = sortedArticles
      .map(a => a.category?.[language])
      .filter((c): c is string => !!c);
    return [t('common.all'), ...Array.from(new Set(allCategories))];
  }, [sortedArticles, language, t]);
  
  useEffect(() => {
      setSelectedCategory(t('common.all'));
      setSearchQuery('');
  }, [language, t]);

  const filteredArticles = useMemo(() => {
    let result = sortedArticles;

    if (selectedCategory !== t('common.all')) {
      result = result.filter(a => a.category?.[language] === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
        const lowerCaseQuery = searchQuery.toLowerCase();
        result = result.filter(a => 
            a.title[language].toLowerCase().includes(lowerCaseQuery) ||
            a.description[language].toLowerCase().includes(lowerCaseQuery) ||
            (a.longDescription && a.longDescription[language].toLowerCase().includes(lowerCaseQuery))
        );
    }
    return result;
  }, [selectedCategory, searchQuery, sortedArticles, language, t]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);


  const featuredArticle = filteredArticles[0] ?? null;
  const articlesForPagination = filteredArticles.slice(1);
  const totalPages = Math.ceil(articlesForPagination.length / ARTICLES_PER_PAGE);
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    return articlesForPagination.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  }, [currentPage, articlesForPagination]);


  return (
    <div className="py-8 md:py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{t('nav.blog')}</h1>
        <p className="text-lg text-light-secondary dark:text-dark-secondary mb-8">
          Explore my thoughts on web development, UI/UX design, and productivity.
        </p>
      </div>
      
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t('blog.searchPlaceholder')}
        ariaLabel={t('blog.search')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        <main className="lg:col-span-8">
            {filteredArticles.length > 0 ? (
                <>
                    {featuredArticle && (
                        <FeaturedArticle 
                            article={featuredArticle} 
                            title={t('blog.featuredArticle')} 
                        />
                    )}
                    
                    {paginatedArticles.length > 0 && (
                       <ArticleGrid 
                            articles={paginatedArticles}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                       />
                    )}
                </>
            ) : (
                <div className="text-center py-20 px-6 bg-light-surface dark:bg-dark-surface rounded-lg">
                    <h3 className="text-2xl font-semibold">{t('blog.noResults')}</h3>
                    <p className="text-light-secondary dark:text-dark-secondary mt-2 max-w-md mx-auto">{t('blog.noResultsDescription')}</p>
                </div>
            )}
        </main>
        
        <BlogSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
            recentArticles={recentArticles}
            categoryTitle={t('blog.categories')}
            recentArticlesTitle={t('blog.recentArticles')}
        />
      </div>
    </div>
  );
};

export default Blog;
