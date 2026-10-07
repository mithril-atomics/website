/**
 * Single source of truth for every word on the site.
 *
 * Rule: no copy lives in a .astro file. Edit this file, not the markup.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const company = {
  name: 'Mithril Atomics',
  legalName: 'Mithril Atomics Pvt. Ltd.',
  domain: 'mithrilatomics.com',
  url: 'https://mithrilatomics.com',
  email: 'info@mithrilatomics.com',
  tagline: 'Unlocking Quantum Intelligence from Invisible Fields',
  linkedin: '[LINKEDIN URL]',
  address: '[REGISTERED ADDRESS]',
};

export const nav: NavItem[] = [
  { label: 'Platform', href: '/platform' },
  { label: 'Team',     href: '/team' },
  { label: 'Contact',  href: '/contact' },
];

export const seo = {
  titleTemplate: '%s — Mithril Atomics',
  defaultTitle: 'Mithril Atomics — Unlocking Quantum Intelligence from Invisible Fields',
  description:
    'Mithril Atomics is building a Quantum Field Intelligence Platform — quantum sensing, autonomous platforms and AI-driven interpretation, turning physical-field signals into actionable intelligence.',
  ogImage: '/og/default.png',
  locale: 'en_IN',
};

/* ===========================================================================
   HOME
   =========================================================================== */

export const home = {
  title: 'Unlocking Quantum Intelligence from Invisible Fields',
  description:
    'Mithril Atomics brings together quantum sensing, autonomous platforms and AI-driven intelligence into a single capability stack for exploration, inspection, detection and navigation.',

  hero: {
    heading: 'Unlocking Quantum Intelligence from Invisible Fields',
    body: [
      'The world around us is filled with signals we cannot see, hear, or directly perceive.',
      'The Earth’s magnetic field, gravitational field and other physical phenomena continuously carry information about what is happening beneath the surface, around critical infrastructure and across our environment.',
    ],
    pullquote: 'Nature is constantly speaking. The question is how much of its signal we can detect, understand and act upon.',
  },

  platform: {
    label: 'The platform',
    heading: 'Building the Quantum Field Intelligence Platform',
    body: [
      'Mithril Atomics is building a Quantum Field Intelligence Platform to turn previously underutilised physical signals into actionable intelligence.',
      'We bring together quantum sensing, autonomous platforms and AI-driven intelligence into a single capability stack — designed to sense the invisible, interpret complex field data and support decisions in the real world.',
    ],
  },

  capabilities: {
    label: 'Capabilities',
    heading: 'From Invisible Signals to Actionable Intelligence',
    lede: 'Our platform brings together four fundamental capabilities:',
    equation: ['Quantum sensing', 'Autonomous platforms', 'AI intelligence'],
    items: [
      { key: 'SENSE',        body: 'Quantum sensors that detect subtle changes in physical fields.' },
      { key: 'DEPLOY',       body: 'Flexible deployment across aerial, marine, terrestrial and space-based platforms.' },
      { key: 'INTERPRET',    body: 'Software and AI that separates meaningful signals from environmental and platform-related noise and converts complex measurements into useful information.' },
      { key: 'INTELLIGENCE', body: 'Domain-specific models that transform field observations into insights for exploration, inspection, detection and navigation.' },
    ],
  },

  applications: {
    label: 'Applications',
    heading: 'Where We Apply It',
    items: [
      {
        title: 'Geophysical Exploration',
        body: "Reveal subtle subsurface signatures to support the exploration and mapping of the Earth's hidden resources and structures.",
      },
      {
        title: 'Structural & Infrastructure NDT',
        body: 'Sense changes associated with buried, concealed or hard-to-access infrastructure to support non-destructive inspection.',
      },
      {
        title: 'Threat Detection',
        body: 'Support the detection and characterisation of concealed objects and threats in complex environments.',
      },
      {
        title: 'GNSS-Denied Navigation',
        body: 'Enable new approaches to positioning and navigation by using naturally occurring physical-field signatures where conventional satellite navigation is unavailable or unreliable.',
      },
    ],
  },

  closing: {
    label: 'The Bigger Picture',
    heading:
      'We are building technology for a world where the invisible becomes measurable, measurable becomes understandable, and understanding becomes intelligence.',
  },
};

/* ===========================================================================
   PLATFORM
   =========================================================================== */

export const platform = {
  title: 'Platform',
  description:
    'Quantum Field Intelligence is AI-native ISR for the physical fields around us — sensing, interpretation, understanding and delivery in one stack.',

  hero: {
    label: 'Beyond Seeing the World',
    heading: 'Intelligence is everywhere. It is hidden in the fields around us.',
    body: [
      'For decades, sensing technologies have helped us observe the physical world. The next frontier is to sense what conventional systems cannot easily see.',
      'Mithril Atomics is developing a new generation of field-intelligence capabilities by combining advances in quantum sensing, autonomous systems and artificial intelligence.',
    ],
    pullquote: 'It is to build the capability layer between the physical world and human decisions.',
  },

  definition: {
    label: 'Definition',
    heading: 'What is a Quantum Field Intelligence Platform?',
    lede: 'Think of it as AI-native ISR for the physical fields around us.',
    body: [
      'Modern Intelligence, Surveillance and Reconnaissance (ISR) systems do not simply collect images or signals. They turn enormous amounts of raw sensor data into detections, locations, patterns and alerts that an operator can understand and act upon.',
      'Quantum Field Intelligence works on the same principle — but starts with the physical fields that already exist around us.',
    ],
    pullquote: 'The information is already present in nature.',
    close: 'Our job is to sense more of it, interpret it more intelligently, and deliver it in a form that is useful to the person making the decision.',
  },

  pipeline: {
    label: 'The stack',
    heading: 'From Sensor Data to Field Intelligence',
    steps: [
      {
        key: 'SENSE',
        body: 'Quantum sensors capture subtle variations in physical fields that contain information about the environment.',
        outputLabel: 'Raw output',
        output: 'Millions of measurements across space and time.',
      },
      {
        key: 'INTERPRET',
        body: 'Our software processes the measurements, suppresses unwanted interference and identifies meaningful patterns.',
        outputLabel: 'Processed output',
        output: 'Signatures, anomalies, changes and spatial patterns.',
      },
      {
        key: 'UNDERSTAND',
        body: 'AI and domain-specific intelligence put those patterns into context.',
        outputLabel: 'Semantic output',
        output: 'What is different? Where is it? How significant is it? What could it represent?',
      },
      {
        key: 'DELIVER',
        body: 'Instead of asking the user to interpret a stream of sensor readings, QFIP delivers user-ready field intelligence.',
        outputLabel: null,
        output: null,
      },
    ],
  },

  analogy: {
    label: 'The principle',
    heading: 'How it Works',
    body: [
      'Consider an AI-enabled surveillance system looking at thousands of images. It does not ask the operator to examine every pixel.',
      'It automatically turns pixels into something meaningful:',
    ],
    chains: [
      {
        caption: 'AI-enabled visual ISR',
        steps: ['Pixels', 'Object', 'Location', 'Classification', 'Change', 'Alert'],
        emphasis: false,
      },
      {
        caption: 'Quantum Field Intelligence',
        steps: ['Field Measurements', 'Signature', 'Location', 'Interpretation', 'Context', 'Actionable Intelligence'],
        emphasis: true,
      },
    ],
    bridge: 'QFIP applies the same intelligence philosophy to physical-field data:',
    pullquote: 'The sensor is only the beginning. The real value is in understanding what the signal means.',
  },

  frontiers: {
    label: 'Applications',
    heading: 'One Platform. Multiple Frontiers.',
    lede: 'The same fundamental capability can address very different problems across industries and environments.',
    items: [
      { key: 'EXPLORE',  body: 'Understand what lies beneath the surface.' },
      { key: 'INSPECT',  body: 'Monitor critical infrastructure without disturbing it.' },
      { key: 'DETECT',   body: 'Find concealed objects and potential threats.' },
      { key: 'NAVIGATE', body: 'Understand the environment when conventional positioning systems cannot.' },
    ],
  },

  reach: {
    label: 'From the Earth to the Edge',
    heading: 'Our vision extends across environments where sensing is difficult, data is scarce and conventional approaches have limitations.',
    domains: ['Land', 'Air', 'Sea', 'Subsurface', 'Space'],
    close: 'We are building the sensing and intelligence infrastructure to operate across them.',
  },
};

/* ===========================================================================
   SHARED CLOSING CALL TO ACTION
   =========================================================================== */

export const cta = {
  statement: 'The Invisible Is Full of Information.',
  heading: 'Talk to us',
  body: 'Whether you are exploring the Earth, protecting critical infrastructure, solving a difficult sensing problem or building the next generation of autonomous systems — we would like to hear from you.',
  action: { label: 'Talk to us', href: '/contact' },
};

/* ===========================================================================
   TEAM
   =========================================================================== */

export interface Person {
  name: string;
  role: string;
  bio: string;
}

export const team = {
  title: 'Team',
  description:
    'A multidisciplinary team building India’s quantum sensing infrastructure — for the world.',
  heading: 'Team',

  founders: {
    label: 'Founding Team',
    heading: 'Founding Team',
    people: [
      {
        name: 'Devendra Mishra',
        role: 'Co-Founder & CEO',
        bio: 'Quantum physicist with 6+ years in quantum hardware and sensing. Former Head of Quantum Hardware at Qulabs, where he led India’s first room-temperature Rb-based quantum memory. He leads Mithril’s technology vision and execution.',
      },
      {
        name: 'Rikteem Bhowmick',
        role: 'Founder & CTO',
        bio: 'IIT Hyderabad alumnus and Institute Silver Medalist with 6+ years in quantum communications and device development. Former Head of Quantum Communications at QAIG, with experience in entanglement systems, QRNGs, quantum networks, and national quantum technology programmes.',
      },
      {
        name: 'Abhijeet Ghodgaonkar',
        role: 'Lead — Sensor Engineering',
        bio: 'Quantum sensor engineer experienced in NV-diamond magnetometers, space instrumentation, electronics, and embedded systems. His work spans IIT Bombay’s QMET Tech Foundation, the Daksha space mission, and CERN’s CMS experiment.',
      },
    ] as Person[],
  },

  advisors: {
    label: 'Advisors',
    heading: 'Advisors',
    people: [
      {
        name: 'Prof. B. S. Murty',
        role: 'Technology Advisor | Director, IIT Hyderabad',
        bio: 'A leading voice in India’s critical minerals ecosystem, with expertise spanning advanced technology, mining, sustainable extraction, and strategic mineral initiatives.',
      },
      {
        name: 'Prof. Sai Santosh Kumar Raavi',
        role: 'Scientific Advisor | IIT Hyderabad',
        bio: 'Professor of Physics specialising in optics and novel materials, with 100+ research publications and international research experience across Japan, the US, and Brazil.',
      },
      {
        name: 'Dr. Niranjan Myneni',
        role: 'Technology Strategist',
        bio: 'Physicist specialising in ultracold atoms, quantum sensing, and quantum gravimetry, with research experience at Raman Research Institute, Institut d’Optique, and Observatoire de Paris.',
      },
      {
        name: 'Srikrishna Vadrevu',
        role: 'Finance & Strategy',
        bio: 'Senior global BFSI leader with 45+ years across SBI, GE Capital, Standard Chartered, and HCL. A founder and operator, he advises Mithril on financial strategy, scaling, and global market entry.',
      },
    ] as Person[],
  },

  closing: 'A multidisciplinary team building India’s quantum sensing infrastructure — for the world.',
};

/* ===========================================================================
   CONTACT
   =========================================================================== */

export const contact = {
  title: 'Contact',
  description: 'Get in touch with Mithril Atomics.',
  heading: 'Talk to us',
  lede: cta.body,
};

export const footer = {
  note: 'Unlocking Quantum Intelligence from Invisible Fields.',
  copyright: (year: number) => `© ${year} ${company.legalName} All rights reserved.`,
  links: [] as NavItem[],
};
