/**
 * Single source of truth for every word on the site.
 *
 * Rule: no copy lives in a .astro file. Edit this file, not the markup.
 *
 * Strings wrapped in [SQUARE BRACKETS] are placeholders awaiting approved copy
 * — they render visibly so nothing fake can ship unnoticed. Search the repo for
 * "[" before any deploy.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SeoDefaults {
  titleTemplate: string;
  defaultTitle: string;
  description: string;
  ogImage: string;
  locale: string;
}

export interface Company {
  name: string;
  legalName: string;
  domain: string;
  url: string;
  email: string;
  tagline: string;
  positioning: string;
  linkedin?: string;
  address?: string;
}

export const company: Company = {
  name: 'Mithril Atomics',
  legalName: 'Mithril Atomics Pvt. Ltd.',
  domain: 'mithrilatomics.com',
  url: 'https://mithrilatomics.com',
  email: 'info@mithrilatomics.com',
  tagline: 'Unlocking quantum intelligence from invisible fields',
  // Internal brand line — used in the <meta> description, not as display copy.
  positioning: "Precision that doesn't need to shout.",
  linkedin: '[LINKEDIN URL]',
  address: '[REGISTERED ADDRESS]',
};

export const nav: NavItem[] = [
  { label: 'Platform',     href: '/platform' },
  { label: 'Applications', href: '/applications' },
  { label: 'Team',         href: '/team' },
  { label: 'Contact',      href: '/contact' },
];

export const seo: SeoDefaults = {
  titleTemplate: '%s — Mithril Atomics',
  defaultTitle: 'Mithril Atomics — Quantum field intelligence',
  description: '[APPROVED 150-CHARACTER META DESCRIPTION]',
  ogImage: '/og/default.png',
  locale: 'en_IN',
};

/* -----------------------------------------------------------------------------
   PAGE CONTENT
   Shapes are fixed; the strings are placeholders until copy is approved.
   -------------------------------------------------------------------------- */

export interface Section {
  label?: string;
  heading: string;
  lede?: string;
  body?: string[];
  items?: { title: string; body: string }[];
}

export interface Page {
  title: string;
  description: string;
  hero: { heading: string; lede: string; cta?: NavItem };
  sections: Section[];
}

export const pages: Record<string, Page> = {
  home: {
    title: 'Quantum field intelligence',
    description: '[HOME META DESCRIPTION]',
    hero: {
      heading: company.tagline,
      lede: '[HOME HERO SUPPORTING PARAGRAPH — 2 SENTENCES]',
      cta: { label: 'See the platform', href: '/platform' },
    },
    sections: [
      { label: 'What we build', heading: '[SECTION 1 HEADING]', lede: '[SECTION 1 LEDE]' },
      { label: 'Why it matters', heading: '[SECTION 2 HEADING]', lede: '[SECTION 2 LEDE]' },
    ],
  },

  platform: {
    title: 'Platform',
    description: '[PLATFORM META DESCRIPTION]',
    hero: { heading: '[PLATFORM HEADING]', lede: '[PLATFORM LEDE]' },
    sections: [
      { heading: '[LAYER 1]', lede: '[LAYER 1 DESCRIPTION]' },
      { heading: '[LAYER 2]', lede: '[LAYER 2 DESCRIPTION]' },
      { heading: '[LAYER 3]', lede: '[LAYER 3 DESCRIPTION]' },
    ],
  },

  applications: {
    title: 'Applications',
    description: '[APPLICATIONS META DESCRIPTION]',
    hero: { heading: '[APPLICATIONS HEADING]', lede: '[APPLICATIONS LEDE]' },
    sections: [
      {
        heading: '[SECTORS HEADING]',
        items: [
          { title: '[SECTOR 1]', body: '[SECTOR 1 DESCRIPTION]' },
          { title: '[SECTOR 2]', body: '[SECTOR 2 DESCRIPTION]' },
          { title: '[SECTOR 3]', body: '[SECTOR 3 DESCRIPTION]' },
        ],
      },
    ],
  },

  team: {
    title: 'Team',
    description: '[TEAM META DESCRIPTION]',
    hero: { heading: '[TEAM HEADING]', lede: '[TEAM LEDE]' },
    sections: [],
  },

  contact: {
    title: 'Contact',
    description: '[CONTACT META DESCRIPTION]',
    hero: { heading: '[CONTACT HEADING]', lede: '[CONTACT LEDE]' },
    sections: [],
  },
};

/* -----------------------------------------------------------------------------
   PEOPLE — names are confirmed; roles and bios await approval.
   -------------------------------------------------------------------------- */

export interface Person {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
}

export const leadership: Person[] = [
  { name: 'Devendra Mishra',      role: 'Chief Executive Officer',  bio: '[BIO]' },
  { name: 'Rikteem Bhowmick',     role: 'Chief Technology Officer', bio: '[BIO]' },
  { name: 'Abhijeet Ghodgaonkar', role: '[ROLE]',                   bio: '[BIO]' },
  { name: 'Srikrishna Vadrevu',   role: '[ROLE]',                   bio: '[BIO]' },
  { name: 'Rahul Rai',            role: '[ROLE]',                   bio: '[BIO]' },
];

export const advisors: Person[] = [
  { name: 'Prof. B. S. Murty',          role: '[ROLE]' },
  { name: 'Prof. Sai Santosh Raavi',    role: '[ROLE]' },
  { name: 'Dr. Niranjan Myneni',        role: '[ROLE]' },
  { name: 'Vijay Yadav',                role: '[ROLE]' },
];

export const footer = {
  note: '[FOOTER NOTE]',
  copyright: (year: number) => `© ${year} ${company.legalName} All rights reserved.`,
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms',   href: '/terms' },
  ] as NavItem[],
};
