
import React from 'react';
import { Certificate } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';
import { DownloadIcon, LinkIcon } from '../icons';

interface CertificateActionsProps {
    certificate: Certificate;
}

const CertificateActions: React.FC<CertificateActionsProps> = ({ certificate }) => {
    const { t } = useAppContext();
    return (
        <div className="mt-10 flex gap-4 flex-wrap">
            {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
                <a 
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    <LinkIcon className="w-5 h-5 mr-2" />
                    {t('common.verifyCredential')}
                </a>
            )}
            {certificate.pdfUrl && (
                <a 
                    href={certificate.pdfUrl}
                    download
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-light-primary dark:text-dark-primary bg-light-surface dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    {t('common.downloadCertificate')}
                </a>
            )}
        </div>
    );
};

export default CertificateActions;
