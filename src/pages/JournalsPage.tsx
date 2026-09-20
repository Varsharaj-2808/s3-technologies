import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { SectionTitle } from '../templates/shared/SectionTitle';
import { JOURNALS_DATA } from '../data/journalsData';
import { JournalCard } from '../components/journal/JournalCard';

export const JournalsPage: React.FC = () => {
  return (
    <Layout>
      <ContentCard>
        <SectionTitle>Our Journals</SectionTitle>

        <div className="space-y-3">
          {JOURNALS_DATA.map((journal) => (
            <JournalCard key={journal.id} journal={journal} />
          ))}
        </div>
      </ContentCard>
    </Layout>
  );
};
