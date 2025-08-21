
import React from 'react';

interface BlogTagsProps {
    tags: string[];
}

const BlogTags: React.FC<BlogTagsProps> = ({ tags }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-light-surface dark:bg-dark-surface text-light-secondary dark:text-dark-secondary">
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default BlogTags;
