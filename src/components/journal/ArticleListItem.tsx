import React from 'react';
import { Article } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';

interface ArticleListItemProps {
  article: Article;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({ article }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-white border-b border-gray-200 py-5 first:pt-0 last:border-b-0">
      <div className="text-xs font-semibold text-green-700 mb-1">
        {article.articleType}
      </div>

      <h4
        className="text-base sm:text-lg font-bold leading-snug mb-2"
        style={{ fontFamily: theme.fontFamilyHeading }}
      >
        <Link
          to={`/articles/${article.id}`}
          className="text-gray-900 hover:text-purple-800 transition-colors"
        >
          {article.title}
        </Link>
      </h4>

      <div className="text-xs text-gray-600 mb-2 leading-relaxed">
        <span>By </span>
        <span className="font-semibold text-gray-800">
          {article.authors.join(', ')}
        </span>
        <span> - </span>
        <span className="text-gray-500">{article.publicationDate}</span>
      </div>

      <div className="text-xs text-gray-500 mb-2">
        <span>Volume: {article.volume}, Issue: {article.issue}, Pages: {article.pages}</span>
      </div>

      <div className="text-xs text-green-700 mb-3">
        <a
          href={article.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: theme.primaryColor }}
        >
          {article.doi}
        </a>
      </div>

      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed line-clamp-3 mb-4 text-justify">
        {article.abstract}
      </p>

      <div className="flex items-center gap-3">
        <Link
          to={`/articles/${article.id}`}
          className="px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-opacity inline-block"
          style={{ backgroundColor: theme.buttonBg }}
        >
          View Article
        </Link>
      </div>
    </div>
  );
};
