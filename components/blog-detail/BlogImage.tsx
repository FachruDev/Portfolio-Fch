
import React from 'react';

interface BlogImageProps {
    imageUrl: string;
    altText: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ imageUrl, altText }) => {
    return (
        <img src={imageUrl} alt={altText} className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" />
    );
};

export default BlogImage;
