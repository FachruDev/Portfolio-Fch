
import React from 'react';
import { Certificate } from '../../utils/types';
import CertificateCard from '../CertificateCard';
import { Pagination } from '../Pagination';

interface CertificateListProps {
    certificates: Certificate[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    noResultsText: string;
    noResultsDescription: string;
}

const CertificateList: React.FC<CertificateListProps> = ({
    certificates,
    currentPage,
    totalPages,
    onPageChange,
    noResultsText,
    noResultsDescription
}) => {
    return (
        <main className="lg:col-span-8">
            {certificates.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {certificates.map(cert => (
                            <CertificateCard key={cert.id} certificate={cert} />
                        ))}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </>
            ) : (
                <div className="text-center py-20 px-6 bg-light-surface dark:bg-dark-surface rounded-lg">
                    <h3 className="text-2xl font-semibold">{noResultsText}</h3>
                    <p className="text-light-secondary dark:text-dark-secondary mt-2 max-w-md mx-auto">{noResultsDescription}</p>
                </div>
            )}
        </main>
    );
};

export default CertificateList;
