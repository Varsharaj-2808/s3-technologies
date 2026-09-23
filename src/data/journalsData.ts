import { Journal } from '../types';
import computationalMethodsPng from '../assets/journals/computational-methods.png';
import interdisciplinaryResearchPng from '../assets/journals/interdisciplinary-research.png';
import energyEnvironmentPng from '../assets/journals/energy-environment.png';
import healthcareIssuesPng from '../assets/journals/healthcare-issues.png';
import appliedHealthMedicinePng from '../assets/journals/applied-health-medicine.png';
import businessCulturalStudiesPng from '../assets/journals/business-cultural-studies.png';
import jpubAiPng from '../assets/journals/jpub-ai.png';

export const JOURNALS_DATA: Journal[] = [
  {
    id: 43,
    slug: 'computational-methods',
    title: 'Computational Methods',
    issn: '3048-7447',
    onlineIssn: '3048-7447',
    shortDescription: 'Peer-reviewed international journal dedicated to advancements in computational algorithms, high-performance computing, mathematical modeling, and numerical simulations.',
    aimsAndScopeSummary: 'Publishes original research and review articles on computational mathematics, algorithm analysis, scientific computing, artificial intelligence frameworks, and numerical solutions in engineering.',
    coverImage: computationalMethodsPng,
    establishedYear: 2022,
    apcUsd: 135,
    frequency: 'Monthly (12 issues/year)',
    license: 'CC BY 4.0',
  },
  {
    id: 40,
    slug: 'current-research-in-interdisciplinary-studies',
    title: 'Current Research in Interdisciplinary Studies',
    issn: '2583-5181',
    onlineIssn: '2583-5181',
    shortDescription: 'Multidisciplinary peer-reviewed open access journal bridging arts, social sciences, life sciences, physical sciences, and technology.',
    aimsAndScopeSummary: 'Focuses on cross-disciplinary research methodologies, socio-technical systems, translational scientific discoveries, and collaborative research initiatives.',
    coverImage: interdisciplinaryResearchPng,
    establishedYear: 2021,
    apcUsd: 135,
    frequency: 'Monthly (12 issues/year)',
    license: 'CC BY 4.0',
  },
  {
    id: 47,
    slug: 'energy-and-environmental-research',
    title: 'Energy and Environmental Research',
    issn: '3139-2032',
    onlineIssn: '3139-2032',
    shortDescription: 'Dedicated to sustainable energy systems, climate change mitigation, renewable technology, ecological preservation, and environmental policy.',
    aimsAndScopeSummary: 'Covers photovoltaic materials, wind dynamics, hydrogen fuel cells, pollutant monitoring, bio-waste recycling, and ecological risk assessments.',
    coverImage: energyEnvironmentPng,
    establishedYear: 2023,
    apcUsd: 135,
    frequency: 'Bi-monthly (6 issues/year)',
    license: 'CC BY 4.0',
  },
  {
    id: 42,
    slug: 'healthcare-issues',
    title: 'Healthcare Issues',
    issn: '2583-7796',
    onlineIssn: '2583-7796',
    shortDescription: 'Explores global health challenges, clinical management standards, patient safety policies, health informatics, and hospital administration.',
    aimsAndScopeSummary: 'Addresses epidemiological trends, primary care accessibility, clinical nursing practices, health policy evaluation, and biomedical ethics.',
    coverImage: healthcareIssuesPng,
    establishedYear: 2022,
    apcUsd: 135,
    frequency: 'Monthly (12 issues/year)',
    license: 'CC BY 4.0',
  },
  {
    id: 39,
    slug: 'journal-of-applied-health-sciences-and-medicine',
    title: 'Journal of Applied Health Sciences and Medicine',
    issn: '2583-1887',
    onlineIssn: '2583-1887',
    shortDescription: 'Premier international peer-reviewed journal indexed in Embase (Elsevier), reporting cutting-edge translational clinical studies, diagnostic methodologies, and therapeutics.',
    aimsAndScopeSummary: 'Publishes rigorous empirical studies in immunology, pharmacology, public health interventions, surgical techniques, pathology, and medical biochemistry.',
    coverImage: appliedHealthMedicinePng,
    establishedYear: 2021,
    apcUsd: 135,
    frequency: 'Monthly (12 issues/year)',
    license: 'CC BY 4.0',
  },
  {
    id: 49,
    slug: 'journal-of-business-and-cultural-studies',
    title: 'Journal of Business and Cultural Studies',
    issn: 'Pending',
    shortDescription: 'Investigates modern corporate governance, cultural sociology, organizational psychology, macroeconomics, and cross-cultural trade dynamics.',
    aimsAndScopeSummary: 'A platform for rigorous empirical inquiry into emerging market behaviors, organizational culture, ethics in commerce, and sociological impacts.',
    coverImage: businessCulturalStudiesPng,
    establishedYear: 2024,
    apcUsd: 135,
    frequency: 'Quarterly (4 issues/year)',
    license: 'CC BY 4.0',
  },
  {
    id: 52,
    slug: 'jpub-ai',
    title: 'JPUB AI',
    issn: 'Pending',
    shortDescription: 'Focuses on foundational breakthroughs in machine learning, deep learning, computer vision, natural language processing, neural architectures, and responsible AI.',
    aimsAndScopeSummary: 'Encourages reproducibility in artificial intelligence, neural network optimization, multimodal reasoning models, edge AI, and ethics in automated systems.',
    coverImage: jpubAiPng,
    establishedYear: 2024,
    apcUsd: 135,
    frequency: 'Bi-monthly (6 issues/year)',
    license: 'CC BY 4.0',
  },
];

export const getJournalById = (id: number | string): Journal | undefined => {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return JOURNALS_DATA.find((j) => j.id === numId);
};
