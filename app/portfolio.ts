export const profile = {
  name: 'Arghya Biswas',
  role: 'Full-Stack Developer',
  location: 'Bangladesh',
  github: 'https://github.com/iamarghyaB',
  linkedin: 'https://www.linkedin.com/in/-biswas-arghya',
  studio: 'https://www.makezaa.com/',
  octetec: 'https://octetec.com/',
  instagram: 'https://www.instagram.com/arghya477/',
  facebook: 'https://www.facebook.com/arghya477',
};

export const ventures = [
  {
    name: 'Makezaa',
    location: 'Dhaka, Bangladesh',
    role: 'Co-owner',
    summary: 'We build websites clients can update themselves, Shopify stores they can sell through, and custom apps for workflows that need their own software.',
    services: ['WordPress', 'Shopify', 'Custom web development'],
    website: profile.studio,
    contact: 'https://www.makezaa.com/contact',
  },
  {
    name: 'Octetec',
    location: 'United Kingdom',
    role: 'Co-lead',
    summary: 'We help businesses connect their websites and stores to the systems they use day to day, from payment and checkout flows to custom tools for their teams.',
    services: ['Websites & commerce', 'Business software', 'Payments & integrations'],
    website: profile.octetec,
    contact: 'https://octetec.com/contact',
  },
];

export const personalProjects = [
  {
    number: '01',
    slug: 'import-export-hub',
    name: 'Import Export Hub',
    type: 'Inventory management',
    summary: 'A full-stack app for discovering products, managing exports, and tracking inventory through authenticated workflows.',
    features: ['Searchable product catalog', 'Inventory quantity validation', 'Protected export management'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    live: 'https://import-export-hub-arghya.netlify.app/',
    source: 'https://github.com/iamarghyaB/export-import-client',
  },
  {
    number: '02',
    slug: 'hero-io',
    name: 'Hero.io',
    type: 'App discovery',
    summary: 'A responsive app directory that makes it easy to explore mobile apps and compare ratings, reviews, and downloads.',
    features: ['Search and app detail pages', 'Interactive ratings charts', 'App-store links'],
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts'],
    live: 'https://game-store-arghya.netlify.app/',
    source: 'https://github.com/iamarghyaB/game-store-Arghya',
  },
  {
    number: '03',
    slug: 'greennest',
    name: 'GreenNest',
    type: 'Plant care',
    summary: 'A plant discovery and care app with a searchable catalog, protected accounts, and consultation booking.',
    features: ['Search and catalog filters', 'Google and email sign-in', 'Care guidance and booking'],
    stack: ['React', 'Vite', 'Firebase', 'Tailwind CSS', 'DaisyUI'],
    live: 'https://greennest-arghya.netlify.app/',
    source: 'https://github.com/iamarghyaB/Green-nest',
  },
];

export const teamProjects = [
  {
    number: '01',
    slug: 'campusflow',
    name: 'CampusFlow',
    type: 'Bangladesh · Student productivity',
    summary: 'Bangladesh University students can check class and exam schedules, find rooms, and look up bus routes in one place.',
    contribution: 'Makezaa team project · My role focused on marketing',
    stack: [],
    live: 'https://campusflow.makezaa.com/',
    source: 'https://www.makezaa.com/projects/campusflow-bangladesh-university',
  },
  {
    number: '02',
    slug: 'an-noor',
    name: 'An-Noor',
    type: 'UK · Charity & donations',
    summary: 'A website for a UK charity that explains its initiatives and lets supporters donate online through Stripe or PayPal.',
    contribution: 'Makezaa team delivery',
    stack: ['WordPress', 'Elementor Pro', 'WooCommerce', 'Stripe', 'PayPal'],
    live: 'https://annoor.co.uk/',
    source: 'https://www.makezaa.com/projects/an-noor-charity-donation-platform-with-payment-integration',
  },
  {
    number: '03',
    slug: 'golden-touch',
    name: 'Golden Touch Contractors',
    type: 'US · Business website',
    summary: 'A WordPress site for a Brooklyn roofing contractor. Customers can find services and send inquiries, and the team can update the site themselves.',
    contribution: 'Makezaa team delivery',
    stack: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://goldentouchcontractors.com/',
    source: 'https://www.makezaa.com/projects/golden-touch-contractors-wordpress-project',
  },
];

export const toolSkillGroups = [
  { id: 'frontend', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Vite', 'DaisyUI', 'React Router', 'Data visualization'] },
  { id: 'backend', title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Firebase Authentication', 'Debugging', 'Frontend–backend integration'] },
  { id: 'database', title: 'Database', items: ['MongoDB', 'SQLite', 'CRUD workflows'] },
  { id: 'delivery', title: 'Deployment', items: ['Git & GitHub', 'Netlify', 'Vercel'] },
] as const;

export const skillGroups = [
  ...toolSkillGroups,
  { id: 'product', title: 'Product & collaboration', items: ['Feature planning', 'Usability', 'Client communication', 'SEO', 'Digital marketing'] },
];

export const process = [
  ['Agree on the outcome', 'Find out who will use the product, what they need to do, and how the client will know the project worked.'],
  ['Scope the first release', 'Decide whether a content-managed site, a Shopify store, or custom software fits the brief. Agree on what ships first.'],
  ['Plan the main workflows', 'Map the steps people take and the data behind them. Identify any accounts, permissions, payments, or integrations the project needs.'],
  ['Build and review together', 'Share a working version early so clients can try the main flows and give feedback while changes are still easy to make.'],
  ['Test what matters', 'Check the important paths on mobile and desktop, including forms, sign-in, and checkout where they apply. Test what happens when something goes wrong.'],
  ['Launch and hand over', 'Deploy the product, show the team how to use it, and document what they need to keep it running.'],
];
