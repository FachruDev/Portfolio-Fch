import React from 'react';
import { Link } from 'react-router-dom';
import { Certificate } from '../utils/types';
import { useAppContext } from '../contexts/AppContext';
import { ArrowRightIcon } from './icons';

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  const { language, t } = useAppContext();
  return (
    <Link to={`/certificates/${certificate.id}`} className="bento-grid-item group flex flex-col justify-between h-full text-left">
      <div>
        <div className="overflow-hidden rounded-xl mb-4">
            <img src={certificate.image} alt={certificate.title[language]} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{certificate.title[language]}</h3>
        <p className="text-sm text-light-secondary dark:text-dark-secondary mt-2">
          {t('common.issuedBy')} {certificate.issuer}
        </p>
         <p className="text-sm text-light-secondary dark:text-dark-secondary mt-1">
          {new Date(certificate.date).toLocaleDateString(language, { year: 'numeric', month: 'long' })}
        </p>
        <p className="mt-3 text-light-secondary dark:text-dark-secondary flex-grow line-clamp-3">{certificate.description[language]}</p>
      </div>
      <div className="mt-4 flex items-center text-sm font-semibold text-light-accent dark:text-dark-accent group-hover:translate-x-1 transition-transform">
        <span>{t('common.viewDetails')}</span>
        <ArrowRightIcon className="w-4 h-4 ml-1"/>
      </div>
    </Link>
  );
};

export default CertificateCard;