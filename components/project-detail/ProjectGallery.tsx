
import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

interface ProjectGalleryProps {
    images: string[];
    altText: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, altText }) => {
    const { t } = useAppContext();
    const [selectedImage, setSelectedImage] = useState(images.length > 0 ? images[0] : '');
    
    if (images.length <= 1) {
        return null;
    }

    return (
        <section className="mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">{t('common.gallery')}</h2>
            <div className="mb-4 rounded-2xl overflow-hidden shadow-lg bg-light-surface dark:bg-dark-surface">
                <img src={selectedImage} alt={altText} className="w-full h-auto max-h-[70vh] object-contain transition-all duration-300" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {images.map((img, index) => (
                    <button 
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`rounded-lg overflow-hidden border-2 transition-all duration-200 aspect-video ${selectedImage === img ? 'border-light-accent dark:border-dark-accent scale-105 shadow-xl' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'}`}
                        aria-label={`View image ${index + 1}`}
                    >
                        <img src={img} alt={`thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default ProjectGallery;
