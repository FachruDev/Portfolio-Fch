
import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { useAppContext } from '../contexts/AppContext';
import NotFound from './NotFound';
import BlogHeader from '../components/blog-detail/BlogHeader';
import BlogTags from '../components/blog-detail/BlogTags';
import BlogImage from '../components/blog-detail/BlogImage';
import BlogContent from '../components/blog-detail/BlogContent';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useAppContext();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <BlogHeader article={article} />
      <BlogTags tags={article.tags} />
      <BlogImage imageUrl={article.image} altText={article.title[language]} />
      <BlogContent article={article} />
    </div>
  );
};

export default BlogDetail;