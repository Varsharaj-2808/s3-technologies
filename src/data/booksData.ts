import { Book } from '../types';

export const BOOKS_DATA: Book[] = [
  {
    id: 'book-1',
    slug: 'update-marburg-virus',
    title: 'Update on Marburg virus',
    editor: 'Dr. Kalyanasundaram Madhu',
    isbn: '978-81-959414-0-7',
    publicationDate: '30/09/2023',
    doi: '10.58614/jpub-book-marburg',
    coverImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60',
    description: 'A comprehensive scientific monograph examining the epidemiology, molecular pathogenesis, transmission dynamics, diagnostic developments, and vaccine candidates for Marburg virus disease. Brings together global infectious disease specialists and virology researchers.',
    callForChapters: true,
    contactEmail: 'jpub.editor@jpub.org',
  },
  {
    id: 'book-2',
    slug: 'computational-biophysics-and-modeling',
    title: 'Computational Biophysics and Neural Modeling',
    editor: 'Prof. Giuseppe Lanza & Research Contributors',
    isbn: '978-81-959414-1-4',
    publicationDate: '15/12/2024',
    doi: '10.58614/jpub-book-biophys',
    coverImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=500&auto=format&fit=crop&q=60',
    description: 'Explores algorithms, molecular dynamics simulations, and membrane electrophysiology for translational neuroscience and bioengineering researchers.',
    callForChapters: false,
    contactEmail: 'jpub.editor@jpub.org',
  },
];

export const getBookBySlug = (slug: string): Book | undefined => {
  return BOOKS_DATA.find((b) => b.slug === slug);
};
