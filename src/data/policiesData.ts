import { JournalPolicyContent } from '../types';

export const POLICIES_DATA: Record<string, JournalPolicyContent> = {
  'aims-scope': {
    title: 'Aims and Scope',
    summary: 'Committed to advancing peer-reviewed research through prompt, rigorous, and accessible global academic dissemination.',
    sections: [
      {
        heading: 'Publication Focus and Mission',
        content: 'S3 Publication journals are dedicated to publishing high-quality, peer-reviewed, open-access original research articles, comprehensive review articles, short communications, and clinical case reports. Our mission is to promote the scientific research community by providing an inclusive forum for interdisciplinary breakthroughs.',
      },
      {
        heading: 'Subject Coverage and Interdisciplinary Frontiers',
        content: 'Our journals span vital frontiers in health sciences, clinical medicine, pharmacological advancements, computational methods, environmental engineering, and artificial intelligence frameworks. We welcome empirical studies, translational applications, and innovative theoretical contributions.',
      },
      {
        heading: 'Peer-Review and Editorial Rigor',
        content: 'All submitted manuscripts undergo a meticulous single-anonymous peer-review process conducted by international experts in the respective domain, ensuring the highest standards of scientific soundness and presentation quality.',
      },
    ],
  },
  'author-guidelines': {
    title: 'Instructions for Authors & Author Guidelines',
    summary: 'Guidelines for manuscript preparation, free-format submission options, structure, and ethical compliance.',
    sections: [
      {
        heading: 'Free Format Submission',
        content: 'Manuscript length is not restricted by S3 Publication journals as long as the scientific presentation remains concise and coherent. Authors are encouraged to submit their initial drafts in free format (single Word or PDF file including text, figures, and tables) for swift initial editorial triage.',
      },
      {
        heading: 'Manuscript Structure',
        content: 'Standard research articles should be organized into: Title Page (Title, Authors, Affiliations, Corresponding Email), Abstract (unstructured or structured, 200–300 words), Keywords (4–6 index terms), Introduction, Materials and Methods, Results, Discussion, Conclusions, Acknowledgments, Conflict of Interest statement, and References.',
      },
      {
        heading: 'References & Citations',
        content: 'References must be numbered sequentially in order of appearance using square brackets [1, 2]. Authors must provide DOIs (Digital Object Identifiers) for all cited literature wherever available.',
      },
      {
        heading: 'Figures, Tables and Supplementary Assets',
        content: 'Graphics should possess a minimum resolution of 300 DPI for photographs and 600 DPI for line charts. Tables should be created using standard table editors and accompanied by clear descriptive titles.',
      },
    ],
  },
  'reviewer-guidelines': {
    title: 'Reviewer Guidelines',
    summary: 'Criteria and expectations for reviewers evaluating manuscripts submitted to S3 Publication journals.',
    sections: [
      {
        heading: 'Single-Anonymous Peer Review Process',
        content: 'In a single-anonymous (single-blind) peer review system, the names of the reviewers are hidden from the author, while the reviewer knows the identity of the authors. This facilitates objective, constructive, and uncompromising scientific critique.',
      },
      {
        heading: 'Evaluation Criteria (8-Point Assessment)',
        content: 'Reviewers evaluate manuscripts across eight standardized pillars: 1. Sufficient background and literature citations; 2. Soundness of research design; 3. Clarity of results; 4. Support of conclusions; 5. English proficiency and readability; 6. Presentation quality; 7. Scientific soundness; 8. Final recommendation (Accept, Minor Revision, Major Revision, Reject).',
        list: [
          'Background & Relevant References',
          'Research Design Appropriateness',
          'Clarity of Results Presentation',
          'Conclusions Supported by Empirical Evidence',
          'English Language and Academic Style',
          'Quality of Visual and Tabular Presentation',
          'Scientific Soundness and Methodology',
          'Actionable Constructive Feedback for Authors',
        ],
      },
      {
        heading: 'Confidentiality and Timeliness',
        content: 'Reviewers must treat all submitted manuscripts as confidential documents. Review assignments are expected to be returned within 10–14 days to support efficient editorial turnaround.',
      },
    ],
  },
  'editor-guidelines': {
    title: 'Editor Guidelines',
    summary: 'Standards of editorial independence, governance, integrity, and peer review oversight.',
    sections: [
      {
        heading: 'Editorial Responsibility and Independence',
        content: 'Editors play a central role in maintaining the quality, integrity, and credibility of S3 Publication journals. Editors possess complete authority and independence regarding editorial decisions based solely on scientific merit, originality, and adherence to journal scope.',
      },
      {
        heading: 'Managing Conflicts of Interest',
        content: 'Editors must recuse themselves from handling manuscripts authored by colleagues, current collaborators, or institutional peers to guarantee impartial judgment.',
      },
      {
        heading: 'Handling Publication Misconduct',
        content: 'Editors are tasked with addressing any ethical concerns, suspected duplicate submissions, or image manipulation in compliance with international Committee on Publication Ethics (COPE) flowcharts.',
      },
    ],
  },
  'ethical-policy': {
    title: 'Ethical Principles and Publication Policy',
    summary: 'Commitment to highest ethical standards in scientific publication and scholarly integrity.',
    sections: [
      {
        heading: 'Research and Publication Ethics',
        content: 'The publication of an article in a peer-reviewed journal is a fundamental building block in the development of a coherent and respected network of knowledge. S3 Publication adheres strictly to the core practices defined by the Committee on Publication Ethics (COPE).',
      },
      {
        heading: 'Authorship and Contributorship',
        content: 'Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study. All listed authors must review and approve the final version of the manuscript.',
      },
      {
        heading: 'Human and Animal Rights',
        content: 'Investigations involving human participants must comply with the Declaration of Helsinki and have formal approval from an institutional review board (IRB). Animal studies must adhere to institutional and international laboratory animal care standards.',
      },
    ],
  },
  'open-access': {
    title: 'Open Access Policy',
    summary: 'Unrestricted immediate global access under Creative Commons Attribution 4.0 International.',
    sections: [
      {
        heading: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
        content: 'All articles published by S3 Publication are made immediately available worldwide under an open access license. This means anyone is free to copy, distribute, display, and perform the work, and to make derivative works, provided proper credit is given to the original authors.',
      },
      {
        heading: 'Author Copyright Retention',
        content: 'Authors retain copyright of their published work without restrictions, granting S3 Publication the right of first publication under the CC BY 4.0 license.',
      },
      {
        heading: 'Self-Archiving and Institutional Repositories',
        content: 'Authors are permitted and encouraged to deposit the published Version of Record (PDF) into institutional repositories (e.g., Zenodo, PubMed Central, university repositories) immediately upon publication.',
      },
    ],
  },
  'apc': {
    title: 'Article Processing Charges (APCs)',
    summary: 'Transparent fee structures supporting sustainable open-access peer-review and archiving.',
    sections: [
      {
        heading: 'Transparent APC Structure',
        content: 'To sustain immediate worldwide open access, maintain online infrastructure, and conduct professional copyediting and XML conversion, an Article Processing Charge (APC) of USD 135 (or INR equivalent for Indian authors) applies upon official acceptance of the manuscript.',
      },
      {
        heading: 'No Submission Fees',
        content: 'There are no submission fees, color charges, or page surcharges. APCs are billed only after peer review has successfully concluded and the paper is officially accepted by the editorial board.',
      },
      {
        heading: 'Waiver Policy',
        content: 'S3 Publication provides partial and full APC waivers to authors from low-income economies as designated by the World Bank, ensuring financial constraints never prevent the publication of worthy scientific research.',
      },
    ],
  },
  'indexing': {
    title: 'Abstracting and Indexing',
    summary: 'Official international database indexing, digital preservation, and archive listings.',
    sections: [
      {
        heading: 'Major Indexing Partners',
        content: 'S3 Publication journals are indexed and abstracted across distinguished international indexing databases including Crossref, Embase (Elsevier), Google Scholar, OpenAlex, OpenAIRE, and ROAD (Directory of Open Access Scholarly Resources).',
        list: [
          'Embase (Elsevier) - Indexed and tracked',
          'Crossref - Digital Object Identifiers (DOIs) minted for all publications',
          'Google Scholar - Complete metadata indexing',
          'Zenodo (CERN / EU Open Science Framework) - Long-term digital repository',
          'OpenAlex & OpenAIRE - Global open science graph',
          'ROAD - Directory of Open Access scholarly Resources',
          'Publicum (Poland) & Princeton University Library listing',
        ],
      },
      {
        heading: 'Digital Archiving Policy',
        content: 'The journal is committed to long-term accessibility. Published articles are deposited in Zenodo, a trusted open-access research repository, as a supplementary archiving measure alongside the primary Version of Record.',
      },
    ],
  },
  'plagiarism-policy': {
    title: 'Plagiarism Policy',
    summary: 'Zero tolerance for academic dishonesty, automated screening protocols, and remediation.',
    sections: [
      {
        heading: 'Plagiarism Screening',
        content: 'Plagiarism of any kind is strictly forbidden in S3 Publication journals. All submitted manuscripts are screened using standard plagiarism detection software (Turnitin / iThenticate) during initial editorial triage.',
      },
      {
        heading: 'Permissible Similarity Index',
        content: 'Manuscripts with an overall similarity index exceeding 15% (or more than 3% from any single source, excluding bibliography and methodology quotations) will be returned to the authors for immediate revision or rejected outright.',
      },
    ],
  },
  'submission': {
    title: 'Article Submission Overview',
    summary: 'Guidelines on submitting manuscripts via web form or editorial portal.',
    sections: [
      {
        heading: 'Manuscript Submission Overview',
        content: 'Authors can submit their manuscripts directly through our web form or via the editorial management portal. All papers must represent original, unpublished contributions not under consideration elsewhere.',
      },
      {
        heading: 'Submission Checklist',
        content: 'Before submitting, please ensure you have: 1. Full author names, institutional affiliations, and corresponding emails; 2. Complete abstract and keywords; 3. Manuscript in .doc, .docx, or .pdf format; 4. High-resolution figures embedded or attached; 5. Signed declaration of originality.',
        list: [
          'Corresponding author verified email',
          'Manuscript file (Word or PDF format)',
          'Clear affiliation details for all co-authors',
          'Compliance with ethical declarations',
        ],
      },
    ],
  },
};
