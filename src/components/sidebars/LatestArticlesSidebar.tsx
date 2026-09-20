import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';
import { ARTICLES_DATA } from '../../data/articlesData';
import { FileText, Calendar } from 'lucide-react';

export const LatestArticlesSidebar: React.FC = () => {
  const { theme, themeId } = useTheme();

  const radiusClass = themeId === 'modern' ? 'rounded-lg' : 'rounded-none';

  return (
    <aside className="mb-6">
      <div
        className={`p-6 text-white shadow-sm overflow-hidden ${radiusClass}`}
        style={{
          backgroundColor: theme.sidebarBg,
          fontFamily: theme.fontFamilyBody,
        }}
      >
        <h3
          className="text-center font-bold text-base tracking-wider uppercase text-white mb-2"
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          LATEST ARTICLES
        </h3>
        <div className="w-12 h-0.5 bg-white/60 mx-auto mb-4" />

        <ul className="space-y-0 text-xs sm:text-[13px] leading-snug divide-y divide-white/20">
          {ARTICLES_DATA.slice(0, 5).map((article) => (
            <li key={article.id} className="py-2.5">
              <Link
                to={`/articles/${article.id}`}
                className="block text-gray-100 hover:text-gray-900 hover:bg-white/25 px-1 py-0.5 rounded-xs transition-all hover:pl-2"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
