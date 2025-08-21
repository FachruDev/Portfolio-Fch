
import React, { useState, useMemo, useEffect } from 'react';
import { projects } from '../data/projects';
import { useAppContext } from '../contexts/AppContext';
import SearchBar from '../components/projects/SearchBar';
import ProjectsSidebar from '../components/projects/ProjectsSidebar';
import ProjectList from '../components/projects/ProjectList';

const PROJECTS_PER_PAGE = 6;

const Projects: React.FC = () => {
  const { t, language } = useAppContext();

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(t('common.all'));
  const [sortBy, setSortBy] = useState('newest'); // 'newest' or 'oldest'
  const [currentPage, setCurrentPage] = useState(1);
  
  // Memoized categories from project tags
  const categories = useMemo(() => {
    const allTags = projects.flatMap(p => p.tags);
    return [t('common.all'), ...Array.from(new Set(allTags))];
  }, [t]);

  // Handle language change by resetting filters
  useEffect(() => {
    setSelectedCategory(t('common.all'));
    setSearchQuery('');
    setSortBy('newest');
  }, [language, t]);
  
  // Memoized filtered and sorted projects
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title[language].toLowerCase().includes(lowerCaseQuery) ||
        p.description[language].toLowerCase().includes(lowerCaseQuery) ||
        (p.longDescription && p.longDescription[language].toLowerCase().includes(lowerCaseQuery)) ||
        p.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      );
    }

    // Filter by category
    if (selectedCategory !== t('common.all')) {
      result = result.filter(p => p.tags.includes(selectedCategory));
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy, language, t]);

  // Reset page number on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  // Memoized pagination calculation
  const totalPages = Math.ceil(filteredAndSortedProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredAndSortedProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [currentPage, filteredAndSortedProjects]);

  const sortOptions = [
    { key: 'newest', label: t('projectsPage.newest') },
    { key: 'oldest', label: t('projectsPage.oldest') },
  ];

  return (
    <div className="py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{t('nav.projects')}</h1>
        <p className="text-lg text-light-secondary dark:text-dark-secondary mb-8">
          {t('projectsPage.pageDescription')}
        </p>
      </div>
      
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t('projectsPage.searchPlaceholder')}
        ariaLabel={t('projectsPage.search')}
      />
      
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        <ProjectList
          projects={paginatedProjects}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          noResultsText={t('projectsPage.noResults')}
          noResultsDescription={t('projectsPage.noResultsDescription')}
        />
        
        <ProjectsSidebar
          sortBy={sortBy}
          onSortByChange={setSortBy}
          sortOptions={sortOptions}
          sortTitle={t('projectsPage.sortBy')}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          categoryTitle={t('projectsPage.categories')}
        />
      </div>
    </div>
  );
};

export default Projects;
