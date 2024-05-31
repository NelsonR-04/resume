import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/eddiebauer.webp';
import porfolioImage3 from '../images/portfolio/entel.jpg';
import porfolioImage7 from '../images/portfolio/nulogic.jpg';
import porfolioImage6 from '../images/portfolio/reebok.jpg';
import porfolioImage5 from '../images/portfolio/roadrunnersports.jpg';
import porfolioImage4 from '../images/portfolio/walmart.jpg';
import porfolioImage2 from '../images/portfolio/wildfork.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nelson Rondon Resume',
  description: "",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Nelson Rondon.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Nulogic.io</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in the gym, or exploring new coffee shops in{' '}
        <strong className="text-stone-100">Santiago, Chile</strong>.
      </p>
    </>
  ),
  actions: [
    {
      target: '_blank',
      rel: "noopener noreferrer",
      href: 'resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">I'm a passionate and skilled Fullstack Developer with a strong focus on frontend development. With expertise in a wide range of technologies, I am well-versed in React, Next.js, TypeScript, JavaScript, Node.js, GraphQL, MongoDB, and Content Management Systems (CMS) integrations.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">In my journey as a developer, I have honed my skills in crafting dynamic and responsive user interfaces using React and Next.js. Leveraging the power of TypeScript and JavaScript, I strive to deliver clean and maintainable code that ensures robust and scalable applications.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Let's collaborate and build remarkable web experiences together!</p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Santiago, CL', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Venezuelan', Icon: FlagIcon},
    {label: 'Interests', text: 'Tech, gym, music, photography, exploring new places', Icon: SparklesIcon},
    {label: 'Study', text: 'Simon Bolivar University', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Android Native (Kotlin)',
        level: 4,
      },
      {
        name: 'Flutter',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React / Nextjs',
        level: 9,
      },
      {
        name: 'Angular',
        level: 3,
      },
      {
        name: 'Vue',
        level: 3,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'Golang',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Eddie Bauer',
    description: 'Outdoor retail clothing company',
    url: 'https://eddiebauer.com',
    image: porfolioImage1,
  },
  {
    title: 'Wild Fork Foods (US, CA, MX)',
    description: '',
    url: 'https://wildforkfoods.com/',
    image: porfolioImage2,
  },
  {
    title: 'Entel Chile',
    description: 'Give a short description of your project here.',
    url: 'https://entel.cl',
    image: porfolioImage3,
  },
  {
    title: 'Walmart Chile',
    description: 'Give a short description of your project here.',
    url: 'https://lider.cl',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2013',
    location: 'Simon Bolivar University',
    title: 'Masters in Beer tasting',
    content: <></>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'nelson.rondon94@gmail.com',
      href: 'mailto:nelson.rondon94@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Santiago, Chile',
      href: 'https://www.google.com/maps/place/Santiago,+Regi%C3%B3n+Metropolitana/@-33.4723517,-70.9594812,10z/',
    },
    {
      type: ContactType.Instagram,
      text: '@NelsonR__',
      href: 'https://www.instagram.com/nelsonr__/',
    },
    {
      type: ContactType.Github,
      text: 'nelsonr-04',
      href: 'https://github.com/nelsonr-04',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nelsonr-04'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nelson-rondon94/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/nelsonr__/'},
];
