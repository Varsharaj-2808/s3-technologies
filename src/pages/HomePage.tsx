import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { SectionTitle } from '../templates/shared/SectionTitle';
import { JournalsSidebar } from '../components/sidebars/JournalsSidebar';
import { LatestArticlesSidebar } from '../components/sidebars/LatestArticlesSidebar';

export const HomePage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Layout
      sidebar={
        <>
          <JournalsSidebar />
          <LatestArticlesSidebar />
        </>
      }
    >
      <ContentCard>
        {/* About Publisher */}
        <SectionTitle>About Publisher</SectionTitle>
        <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-6 text-justify">
          S3 Technologies is an autonomous open access academic publisher of arts, science,
          engineering and healthcare journals, proceeding and books.
        </p>

        {/* Our mission */}
        <SectionTitle>Our mission</SectionTitle>
        <ul className="space-y-3 mb-6 text-[13px] sm:text-sm text-gray-700 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <span
              className="w-2 h-2 rounded-full shrink-0 mt-2"
              style={{ backgroundColor: theme.topBannerBg }}
            />
            <span>
              To promote the research community by publishing the articles enabling the advancements to the readers.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              className="w-2 h-2 rounded-full shrink-0 mt-2"
              style={{ backgroundColor: theme.topBannerBg }}
            />
            <span>
              To enhance the thirst of abundance of knowledge for motivating academician, scientist, professionals etc.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              className="w-2 h-2 rounded-full shrink-0 mt-2"
              style={{ backgroundColor: theme.topBannerBg }}
            />
            <span>
              Strengthening the collaboration between authors and readers for providing disseminating the scientific knowledge.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              className="w-2 h-2 rounded-full shrink-0 mt-2"
              style={{ backgroundColor: theme.topBannerBg }}
            />
            <span>
              To inculcate the technological applications for the societal needs and to bring out the research articles in open access platform.
            </span>
          </li>
        </ul>

        {/* For authors */}
        <SectionTitle>For authors</SectionTitle>
        <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-6 text-justify">
          Our logic is to map modern wildernesses in developing and creating innovation ranges in research,
          industry and administration, and to connect with centres of brilliance around the world to supply
          definitive scope and references in focused and specialist fields.
        </p>

        {/* Publishing Ethics */}
        <SectionTitle>Publishing Ethics</SectionTitle>
        <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-4 text-justify">
          The publication of an editorial in a peer-reviewed journal is a basic building square within the
          advancement of a coherent and regarded organize of information. It could be a coordinate reflection
          of the quality of the work of the creators and the teach that back them. Peer-reviewed articles
          support and exemplify the logical method.
        </p>
        <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-4 text-justify">
          It is subsequently vital to concur upon guidelines of anticipated moral conduct for all parties
          included within the act of distributing: the creator, the journal editor, the peer analyst,
          the distributer and the society of society-owned or supported journals.
        </p>
        <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed text-justify">
          S3 Technologies gives an assurance to the scientific research community to impose peer review
          and to follow the moral ethics and integrity to ensure high quality research work in the field
          of scholarly publication.
        </p>
      </ContentCard>
    </Layout>
  );
};
