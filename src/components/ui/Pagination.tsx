import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const { theme, themeId } = useTheme();

  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const btnRadius = themeId === 'modern' ? 'rounded-lg' : themeId === 'classic' ? 'rounded' : 'rounded-none';

  return (
    <div className="flex items-center justify-center gap-1.5 my-6 select-none flex-wrap text-sm">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`p-1.5 border border-gray-300 disabled:opacity-30 cursor-pointer ${btnRadius} bg-white hover:bg-gray-50`}
        title="First Page"
      >
        <ChevronsLeft className="w-4 h-4" />
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-1.5 border border-gray-300 disabled:opacity-30 cursor-pointer ${btnRadius} bg-white hover:bg-gray-50`}
        title="Previous Page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPages().map((p, idx) => {
        if (p === '...') {
          return (
            <span key={`dots-${idx}`} className="px-2 py-1 text-gray-500">
              ...
            </span>
          );
        }

        const isCurrent = p === currentPage;
        return (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className={`min-w-[34px] h-[34px] px-2.5 font-medium border text-sm transition-colors cursor-pointer ${btnRadius} ${
              isCurrent
                ? 'text-white border-transparent font-bold'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: isCurrent ? theme.primaryColor : undefined,
            }}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-1.5 border border-gray-300 disabled:opacity-30 cursor-pointer ${btnRadius} bg-white hover:bg-gray-50`}
        title="Next Page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`p-1.5 border border-gray-300 disabled:opacity-30 cursor-pointer ${btnRadius} bg-white hover:bg-gray-50`}
        title="Last Page"
      >
        <ChevronsRight className="w-4 h-4" />
      </button>
    </div>
  );
};
