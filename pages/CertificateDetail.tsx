
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { certificates } from '../data/certificates';
import { useAppContext } from '../contexts/AppContext';
import NotFound from './NotFound';
import CertificateImage from '../components/certificate-detail/CertificateImage';
import CertificateHeader from '../components/certificate-detail/CertificateHeader';
import CertificateMeta from '../components/certificate-detail/CertificateMeta';
import CertificateSkills from '../components/certificate-detail/CertificateSkills';
import CertificateActions from '../components/certificate-detail/CertificateActions';

const CertificateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useAppContext();
  const certificate = certificates.find(c => c.id === id);

  if (!certificate) {
    return <NotFound />;
  }

  return (
     <div className="max-w-6xl mx-auto">
       <Link to="/certificates" className="inline-flex items-center mb-8 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors group">
         <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> 
         <span className="ml-2">{t('common.back')} to {t('nav.certificates')}</span>
       </Link>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <CertificateImage 
            imageUrl={certificate.image} 
            altText={certificate.title[language]} 
        />

        {/* Right Column: Details */}
        <div className="lg:col-span-2">
            <CertificateHeader certificate={certificate} />
            <CertificateMeta certificate={certificate} />
            <CertificateSkills tags={certificate.tags} />
            <CertificateActions certificate={certificate} />
        </div>
       </div>
    </div>
  );
};

export default CertificateDetail;
