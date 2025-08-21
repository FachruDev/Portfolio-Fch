
import React from 'react';
import { Certificate } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';

interface CertificateHeaderProps {
    certificate: Certificate;
}

const CertificateHeader: React.FC<CertificateHeaderProps> = ({ certificate }) => {
    const { language } = useAppContext();
    return (
        <>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-light-primary dark:text-dark-primary">{certificate.title[language]}</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-light-secondary dark:text-dark-secondary mt-4">
                <p>{certificate.longDescription?.[language]}</p>
            </div>
        </>
    );
};

export default CertificateHeader;
