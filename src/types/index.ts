export type ThemeId = 'classic' | 'modern' | 'heritage';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bgPage: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  borderColor: string;
  headerBg: string;
  topBannerBg: string;
  innerBannerBg: string;
  sidebarBg: string;
  navBg: string;
  navText: string;
  navHoverBg: string;
  buttonBg: string;
  badgeBg: string;
  fontFamilyHeading: string;
  fontFamilyBody: string;
  cardRadius: string;
  contentContainerClass: string;
}

export interface Journal {
  id: number;
  slug: string;
  title: string;
  issn: string;
  onlineIssn?: string;
  printIssn?: string;
  shortDescription: string;
  description?: string;
  aimsAndScopeSummary: string;
  coverImage: string;
  establishedYear: number;
  apcUsd: number;
  frequency: string;
  license: string;
  editorialHouseRegister?: string;
  editorialHouseLogin?: string;
}

export interface Article {
  id: number;
  journalId: number;
  title: string;
  articleType: 'Research Article' | 'Review Article' | 'Case Report' | 'Editorial';
  authors: string[];
  affiliation?: string;
  publicationDate: string;
  receivedDate: string;
  acceptedDate: string;
  volume: number;
  issue: number;
  year: number;
  month: string;
  pages: string;
  doi: string;
  abstract: string;
  keywords: string[];
  pdfUrl: string;
  references?: string[];
  views?: number;
  downloads?: number;
}

export interface EditorialMember {
  id: string;
  journalId: number;
  role: 'editor-in-chief' | 'associate-editor' | 'editor';
  title: string;
  name: string;
  affiliation: string;
  email: string;
  profiles: {
    scopus?: string;
    orcid?: string;
    googleScholar?: string;
    institutional?: string;
  };
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  editor: string;
  isbn: string;
  publicationDate: string;
  doi: string;
  coverImage: string;
  description: string;
  callForChapters: boolean;
  contactEmail: string;
}

export interface JournalPolicyContent {
  title: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    list?: string[];
  }[];
}

export interface SubmissionTrackingResult {
  paperId: string;
  email: string;
  found: boolean;
  title?: string;
  journal?: string;
  status?: 'Manuscript Received' | 'Initial Screening' | 'Peer Review' | 'Revision Requested' | 'Accepted' | 'Published';
  lastUpdated?: string;
  nextStep?: string;
}
