import React from 'react';
import { EditorialMember } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { User, Mail, ExternalLink, Award } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface EditorialMemberCardProps {
  member: EditorialMember;
}

export const EditorialMemberCard: React.FC<EditorialMemberCardProps> = ({ member }) => {
  const { theme, themeId } = useTheme();

  const getRoleLabel = () => {
    switch (member.role) {
      case 'editor-in-chief':
        return 'Editor-in-Chief';
      case 'associate-editor':
        return 'Associate Editor';
      case 'editor':
      default:
        return 'Editorial Board Member';
    }
  };

  const radiusClass = themeId === 'modern' ? 'rounded-xl' : themeId === 'classic' ? 'rounded-md' : 'rounded-none';

  return (
    <div
      className={`bg-white border p-5 shadow-xs mb-4 flex flex-col sm:flex-row items-start gap-4 ${radiusClass}`}
      style={{ borderColor: theme.borderColor }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white font-bold"
        style={{ backgroundColor: member.role === 'editor-in-chief' ? theme.primaryColor : theme.secondaryColor }}
      >
        <User className="w-6 h-6" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3 className="text-base font-bold text-gray-900" style={{ fontFamily: theme.fontFamilyHeading }}>
            {member.title} {member.name}
          </h3>
          <Badge variant={member.role === 'editor-in-chief' ? 'primary' : 'neutral'}>
            {getRoleLabel()}
          </Badge>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          {member.affiliation}
        </p>

        <div className="flex items-center gap-3 text-xs flex-wrap">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1 text-gray-600 hover:text-purple-700 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              {member.email}
            </a>
          )}

          {member.profiles.scopus && (
            <a
              href={member.profiles.scopus}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <span>Scopus Profile</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}

          {member.profiles.orcid && (
            <a
              href={member.profiles.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-700 hover:underline"
            >
              <span>ORCID</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}

          {member.profiles.googleScholar && (
            <a
              href={member.profiles.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-700 hover:underline"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
