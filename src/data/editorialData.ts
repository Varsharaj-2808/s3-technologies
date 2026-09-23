import { EditorialMember } from '../types';

export const EDITORIAL_MEMBERS: EditorialMember[] = [
  {
    id: 'ed-1',
    journalId: 39,
    role: 'editor-in-chief',
    title: 'Prof. Dr.',
    name: 'Giuseppe Lanza',
    affiliation: 'Department of Surgery and Medical-Surgical Specialties, University of Catania, Catania, Italy',
    email: 'giuseppe.lanza1@unict.it',
    profiles: {
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=35868884900',
      orcid: 'https://orcid.org/0000-0002-5659-7908',
      institutional: 'https://www.unict.it/en/users/giuseppe-lanza',
    },
  },
  {
    id: 'ed-2',
    journalId: 39,
    role: 'associate-editor',
    title: 'Prof. Dr.',
    name: 'Ahmed Abduljabbar Jaloob Aljanaby',
    affiliation: 'Faculty of Science, University of Kufa, Kufa, Iraq',
    email: 'ahmedaj.aljanabi@uokufa.edu.iq',
    profiles: {
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=55572520600',
      orcid: 'https://orcid.org/0000-0002-5201-9457',
    },
  },
  {
    id: 'ed-3',
    journalId: 39,
    role: 'editor',
    title: 'Dr.',
    name: 'Sakarie Mustafe Hidig',
    affiliation: 'General Surgery Department, The Fourth Affiliated Hospital, Zhejiang University School of Medicine, Yiwu, China',
    email: 'sakariemhidig@zju.edu.cn',
    profiles: {
      googleScholar: 'https://scholar.google.com/citations?user=sakariemhidig',
      orcid: 'https://orcid.org/0000-0002-1402-9905',
    },
  },
  {
    id: 'ed-4',
    journalId: 39,
    role: 'editor',
    title: 'Prof. Dr.',
    name: 'Hutham Mahmood Yousif Al-Labban',
    affiliation: 'Faculty of Science, University of Kufa, Kufa, Iraq',
    email: 'hutham.allabban@uokufa.edu.iq',
    profiles: {
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57193740200',
    },
  },
  {
    id: 'ed-5',
    journalId: 39,
    role: 'editor',
    title: 'Dr.',
    name: 'Amr Almaz Abdel-Aziem',
    affiliation: 'Faculty of Physical Therapy, Cairo University, Cairo, Egypt',
    email: 'amralmaz@yahoo.com',
    profiles: {
      googleScholar: 'https://scholar.google.com/citations?user=amralmaz',
      orcid: 'https://orcid.org/0000-0002-8610-856X',
    },
  },
  {
    id: 'ed-6',
    journalId: 39,
    role: 'editor',
    title: 'Dr.',
    name: 'Durgesh Ranjan Kar',
    affiliation: 'BCDA College of Pharmacy & Technology, Madhyamgram, West Bengal, India',
    email: 'durgesh176@gmail.com',
    profiles: {
      scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57204910200',
    },
  },
  {
    id: 'ed-7',
    journalId: 43,
    role: 'editor-in-chief',
    title: 'Dr.',
    name: 'M. Kalyanasundaram',
    affiliation: 'Directorate of Computational Sciences, S3 Publication Research Unit, Prayagraj, UP, India',
    email: 'dr.kmadhu@jpub.org',
    profiles: {
      orcid: 'https://orcid.org/0000-0003-4920-1123',
    },
  },
];

export const getEditorialBoardByJournalId = (journalId: number | string): EditorialMember[] => {
  const numId = typeof journalId === 'string' ? parseInt(journalId, 10) : journalId;
  return EDITORIAL_MEMBERS.filter((m) => m.journalId === numId);
};
