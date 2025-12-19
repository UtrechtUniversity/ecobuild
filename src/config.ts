import heroImage from './assets/hero-real.jpg';

export const SITE = {
  website: 'https://scholar-lite-demo.netlify.app/', // Replace with your actual deployed URL
  author: 'EcoBUILD',
  description: 'A lightweight, modern static website template for academic labs and scholars.',
  title: 'EcoBUILD',
  ogImage: 'astropaper-og.jpg',  // No idea what this does
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // Lab Info
  labName: 'EcoBUILD',
  university: 'Utrecht University',
  logo: '/assets/Utrecht_University_logo.png', // Logo path
  avatar: '/assets/Utrecht_University_logo.png', // Avatar for SEO/Schema
  email: 'katharina.hecht11@gmail.com', // Contact email for Join Us page

  // Hero Section (Home Page) - Main content does not need to be translated for 8 languages by default
  hero: {
    title: 'Data-driven nexus for sustainable building design',
    subtitle: 'EcoBUILD - the largest evidence-based, open-access and open-source information platform focusing on ecological benefits of design strategies.',
    subtitleLink: {
      text: 'More about our research at Utrecht University.',
      url: 'https://www.uu.nl/en/research/sustainability/data-driven-nexus-for-sustainable-building-design'
    },
    action: 'View Publications', // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: 'Home', link: '/', key: 'home' },
    { text: 'About', link: '/about', key: 'about' },
    { text: 'Publications', link: '/publications', key: 'publications' },
    //{ text: 'Success Stories', link: '/success-stories', key: 'success-stories' },
    { text: 'Team', link: '/team', key: 'team' },
    //{ text: 'Activities', link: '/activities', key: 'activities' },
    { text: 'Contact Us', link: '/contact', key: 'contact' },
    //{ text: 'Search', link: '/search', key: 'search' },
  ],

  // Custom Pages (Appended after 'Join Us')
  customPages: [
    { text: 'Tools', link: '/tool', key: 'tool' }
  ],

  // i18n Config
  i18n: {
    enabled: false,
    defaultLocale: 'en',
  }
};

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    link: 'https://github.com/fjd2004711/scholar-lite',
    active: true,
  },
];

// Default language configuration
//export const DEFAULT_LANG: 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru' = 'en'; 
// Not using any translation for now