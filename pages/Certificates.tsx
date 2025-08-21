
import React, { useState, useMemo, useEffect } from 'react';
import { certificates } from '../data/certificates';
import { useAppContext } from '../contexts/AppContext';
import SearchBar from '../components/certificates/SearchBar';
import CertificatesSidebar from '../components/certificates/CertificatesSidebar';
import CertificateList from '../components/certificates/CertificateList';

const CERTIFICATES_PER_PAGE = 6;

const Certificates: React.FC = () => {
  const { t, language } = useAppContext();

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'oldest', 'a-z', 'z-a'
  const [currentPage, setCurrentPage] = useState(1);
  
  // Handle language change by resetting filters
  useEffect(() => {
    setSearchQuery('');
    setSortBy('newest');
  }, [language, t]);
  
  // Memoized filtered and sorted certificates
  const filteredAndSortedCertificates = useMemo(() => {
    let result = [...certificates];

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.title[language].toLowerCase().includes(lowerCaseQuery) ||
        c.description[language].toLowerCase().includes(lowerCaseQuery) ||
        c.issuer.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'a-z':
          return a.title[language].localeCompare(b.title[language]);
        case 'z-a':
          return b.title[language].localeCompare(a.title[language]);
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return result;
  }, [searchQuery, sortBy, language, t]);

  // Reset page number on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy]);

  // Memoized pagination calculation
  const totalPages = Math.ceil(filteredAndSortedCertificates.length / CERTIFICATES_PER_PAGE);
  const paginatedCertificates = useMemo(() => {
    const startIndex = (currentPage - 1) * CERTIFICATES_PER_PAGE;
    return filteredAndSortedCertificates.slice(startIndex, startIndex + CERTIFICATES_PER_PAGE);
  }, [currentPage, filteredAndSortedCertificates]);

  const sortOptions = [
    { key: 'newest', label: t('certificatesPage.newest') },
    { key: 'oldest', label: t('certificatesPage.oldest') },
    { key: 'a-z', label: t('certificatesPage.atoz') },
    { key: 'z-a', label: t('certificatesPage.ztoa') },
  ];

  return (
    <div className="py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{t('certificatesPage.title')}</h1>
        <p className="text-lg text-light-secondary dark:text-dark-secondary mb-8">
          {t('certificatesPage.pageDescription')}
        </p>
      </div>
      
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t('certificatesPage.searchPlaceholder')}
        ariaLabel={t('certificatesPage.search')}
      />
      
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        <CertificateList
            certificates={paginatedCertificates}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            noResultsText={t('certificatesPage.noResults')}
            noResultsDescription={t('certificatesPage.noResultsDescription')}
        />
        
        <CertificatesSidebar
            sortBy={sortBy}
            onSortByChange={setSortBy}
            sortTitle={t('certificatesPage.sortBy')}
            sortOptions={sortOptions}
        />
      </div>
    </div>
  );
};

export default Certificates;
