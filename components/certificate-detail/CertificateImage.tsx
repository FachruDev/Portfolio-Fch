
import React from 'react';

interface CertificateImageProps {
    imageUrl: string;
    altText: string;
}

const CertificateImage: React.FC<CertificateImageProps> = ({ imageUrl, altText }) => {
    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24">
                <img 
                    src={imageUrl} 
                    alt={altText} 
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl bg-light-surface dark:bg-dark-surface p-2"
                />
            </div>
        </div>
    );
};

export default CertificateImage;
