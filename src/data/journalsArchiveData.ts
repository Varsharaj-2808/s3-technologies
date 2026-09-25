export interface JournalIssue {
  id: string;
  period: string;
}

export interface JournalVolume {
  volume: number;
  year: number;
  issues: JournalIssue[];
}

export const JOURNALS_ARCHIVE_DATA: Record<number, JournalVolume[]> = {
  39: [
    {
      volume: 1,
      year: 2021,
      issues: [
        { id: '1', period: 'January - June' },
        { id: '2', period: 'July - December' },
      ],
    },
    {
      volume: 2,
      year: 2022,
      issues: [
        { id: '1', period: 'March' },
        { id: '2', period: 'June' },
        { id: '3', period: 'October' },
        { id: '4', period: 'December' },
      ],
    },
    {
      volume: 3,
      year: 2023,
      issues: [
        { id: '1', period: 'January' },
        { id: '2', period: 'February' },
        { id: '3', period: 'March' },
        { id: '4', period: 'April' },
        { id: '5', period: 'May' },
        { id: '6', period: 'June' },
        { id: '7', period: 'July' },
        { id: '8', period: 'August' },
        { id: '9', period: 'September' },
        { id: '10', period: 'October' },
        { id: '11', period: 'November' },
        { id: '12', period: 'December' },
      ],
    },
    {
      volume: 4,
      year: 2024,
      issues: [
        { id: '1', period: 'January' },
        { id: '2', period: 'March' },
        { id: '3', period: 'April' },
        { id: '4', period: 'May' },
        { id: '5', period: 'June' },
        { id: '6', period: 'July' },
        { id: '7', period: 'August' },
        { id: '8', period: 'September' },
        { id: '9', period: 'October' },
        { id: '10', period: 'November' },
        { id: '11', period: 'December' },
      ],
    },
    {
      volume: 5,
      year: 2025,
      issues: [
        { id: '1', period: 'January' },
        { id: '2', period: 'February' },
        { id: '3', period: 'March' },
        { id: '4-5', period: 'April-May' },
        { id: '6', period: 'June' },
        { id: '7', period: 'July' },
        { id: '8', period: 'August' },
        { id: '9', period: 'September' },
        { id: '10', period: 'October' },
        { id: '11', period: 'November' },
        { id: '12', period: 'December' },
      ],
    },
    {
      volume: 6,
      year: 2026,
      issues: [
        { id: '1', period: 'January' },
        { id: '2', period: 'February' },
        { id: '3', period: 'March' },
        { id: '4', period: 'April' },
        { id: '5', period: 'May' },
        { id: '6', period: 'June' },
        { id: '7', period: 'July' },
        { id: '8', period: 'August' },
        { id: '9', period: 'September' },
      ],
    },
  ],
  43: [
    {
      volume: 1,
      year: 2024,
      issues: [{ id: '1', period: 'December' }],
    },
    {
      volume: 2,
      year: 2025,
      issues: [
        { id: '1', period: 'August' },
        { id: '2', period: 'December' },
      ],
    },
    {
      volume: 3,
      year: 2026,
      issues: [
        { id: '1', period: 'January-June' },
        { id: '2', period: 'July-December' },
      ],
    },
  ],
  40: [
    {
      volume: 1,
      year: 2022,
      issues: [
        { id: '1', period: 'July' },
        { id: '2', period: 'August' },
        { id: '3', period: 'September' },
        { id: '4', period: 'November' },
        { id: '5', period: 'December' },
      ],
    },
    {
      volume: 2,
      year: 2023,
      issues: [
        { id: '1', period: 'January' },
        { id: '2', period: 'February' },
        { id: '3', period: 'March' },
        { id: '4', period: 'April' },
        { id: '5', period: 'May' },
        { id: '6', period: 'June' },
        { id: '7', period: 'July' },
        { id: '8', period: 'August' },
      ],
    },
    {
      volume: 3,
      year: 2024,
      issues: [
        { id: '1', period: 'March' },
        { id: '2', period: 'May' },
        { id: '3', period: 'August' },
        { id: '4', period: 'September' },
      ],
    },
    {
      volume: 4,
      year: 2025,
      issues: [
        { id: '1', period: 'February' },
        { id: '2', period: 'March' },
        { id: '3', period: 'August' },
        { id: '4', period: 'September' },
        { id: '5', period: 'November' },
        { id: '6', period: 'December' },
      ],
    },
    {
      volume: 5,
      year: 2026,
      issues: [
        { id: '1', period: 'January' },
        { id: '2', period: 'February' },
        { id: '3', period: 'March' },
        { id: '4', period: 'April' },
        { id: '5-6', period: 'May-June' },
        { id: '7-8', period: 'July-August' },
      ],
    },
  ],
  47: [
    {
      volume: 1,
      year: 2025,
      issues: [{ id: '1', period: 'July-December' }],
    },
    {
      volume: 2,
      year: 2026,
      issues: [{ id: '1', period: 'January - June' }],
    },
  ],
  42: [
    {
      volume: 1,
      year: 2022,
      issues: [{ id: '1', period: 'July - December' }],
    },
    {
      volume: 2,
      year: 2023,
      issues: [
        { id: '1', period: 'January - June' },
        { id: '2', period: 'July - December' },
      ],
    },
    {
      volume: 3,
      year: 2024,
      issues: [
        { id: '1', period: 'January - June' },
        { id: '2', period: 'July - December' },
      ],
    },
    {
      volume: 4,
      year: 2025,
      issues: [
        { id: '1', period: 'January - June' },
        { id: '2', period: 'July - December' },
      ],
    },
    {
      volume: 5,
      year: 2026,
      issues: [
        { id: '1', period: 'January - June' },
        { id: '2', period: 'July-December' },
      ],
    },
  ],
  49: [
    {
      volume: 1,
      year: 2026,
      issues: [{ id: '1', period: 'January-June' }],
    },
  ],
  52: [
    {
      volume: 1,
      year: 2026,
      issues: [{ id: '1', period: 'July-December' }],
    },
  ],
};

export const getJournalVolumes = (journalId: number | string): JournalVolume[] => {
  const numId = typeof journalId === 'string' ? parseInt(journalId, 10) : journalId;
  return JOURNALS_ARCHIVE_DATA[numId] || [];
};

export const getIssueSpan = (issueId: string): [number, number] => {
  const [startRaw, endRaw = startRaw] = issueId.split('-');
  const start = parseInt(startRaw, 10);
  const end = parseInt(endRaw, 10);
  const lo = Number.isNaN(start) ? 0 : start;
  const hi = Number.isNaN(end) ? lo : end;
  return [lo, hi];
};