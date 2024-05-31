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
import porfolioImage1 from '../images/portfolio/eddiebauer.jpg';
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
    description: 'Food company',
    url: 'https://wildforkfoods.com/',
    image: porfolioImage2,
  },
  {
    title: 'Entel Chile',
    description: 'Mobile Network Operator company',
    url: 'https://entel.cl',
    image: porfolioImage3,
  },
  {
    title: 'Walmart Chile',
    description: 'Retail company',
    url: 'https://lider.cl',
    image: porfolioImage4,
  },
  {
    title: 'Road Runner Sports',
    description: 'Road Runner',
    url: 'https://roadrunnersports.com',
    image: porfolioImage5,
  },
  {
    title: 'Reebok',
    description: 'Reebok',
    url: 'https://reebok.com',
    image: porfolioImage6,
  },
  {
    title: 'Nulogic',
    description: 'Nulogic',
    url: 'https://nulogic.io',
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
    title: 'Electronics Technician',
    content: <></>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: ' ',
    location: 'Chile (Remote)',
    title: 'Walmart, Full-stack Developer / Mobile Developer',
    content: (
      <>
        <p>• Support on Order Management System on a Legacy system process using C#.</p>
        <p>• Migration from OMS to use a decentralized system based on events from Apache Kafka and Python.</p>
        <p>• Managing checkout orders on OMS database, SQL.</p>
        <p>• Managing order event driven system from Kafka topics and monitoring using Azure Logs</p>
        <p>• Development of Back-to-frontend service to be able to read and store relevant order information for Customer Pickup</p>
        <p>• Android Native app development to increase efficiency on Pickup process on stores, using Kotlin and Jetpack Compose</p>
        <p>• Migration to existent Android Native App to React Native + Typescript</p>
        <p>• Single Sign On integration for user access through a group directory</p>
        <p>• Creation of APIs to Receive, Store and Dispense orders verifying customer and store data.</p>
        <p>• Implement a custom Barcode/QR scanner on the app.</p>
        <p>• Creation of Grafana Dashboards and monitoring logs through Splunk.</p>
        <p>• Automation of web tasks using Python and Selenium.</p>
      </>
    ),
  },
  {
    date: ' ',
    location: 'US / CA / MX / CL (Remote)',
    title: 'Wildfork Foods, Frontend Developer',
    content: (
      <>
        <p>• Set up dynamic components and page model integration with CMS (Contentful) using GraphQL queries.</p>
        <p>• Klaviyo integration for customer mailing lists.</p>
        <p>• Implemented internationalization for the website to be available with translations for fr-CA, en-US, and Spanish.</p>
        <p>• Checkout process integration with add to cart items.</p>
        <p>• Creation of dynamic Product List Page.</p>
      </>
    ),
  },
  {
    date: ' ',
    location: 'United States (Remote)',
    title: 'Roadrunner Sports, Fullstack Developer',
    content: (
      <>
        <p>• Complete UI/UX redesign and migration of the current website to NextJs, Redux, Sass and Webpack.</p>
        <p>• Creation of Product list page, Product detail, Checkout, Cart and account managing pages.</p>
        <p>• Created several reusable React components to be used across the entire website.</p>
        <p>• Forms handling on API requests.</p>
        <p>• Handling the failure scenarios of the Payment process.</p>
        <p>• Project Delivery and Support.</p>
        <p>• Set up dynamic components and page model integration with CMS (Contentful) using GraphQL queries.</p>
      </>
    ),
  },
  {
    date: ' ',
    location: 'Chile (Hybrid)',
    title: 'Entel, Frontend Developer',
    content: (
      <>
        <p>• Implementation of new features and redesign for ecommerce portal, as a Frontend ReactJS Developer.</p>
        <p>• Implementation of DataLayer actions on entire website.</p>
        <p>• Creation of Cart and Checkout managing process.</p>
        <p>• Verify identity of customer to be able to port from another mobile phone operator.</p>
        <p>• Development of reusable React components to be used across the entire website.</p>
        <p>• Creation of Home, Account, PLP and PDP pages.</p>
        <p>• Project Delivery and Support.</p>
      </>
    ),
  },
  {
    date: ' ',
    location: 'United States (Remote)',
    title: 'Eddie Bauer / Reebok from Sparc Group, Fullstack Developer',
    content: (
      <>
        <p>• Part of a team of 5 people in charge to implement the new payment methods to integrate Vertex, a tax platform to calculate and manage taxes for US and Canada on the e-commerce website <a href="https://www.eddiebauer.com/">https://www.eddiebauer.com/</a> / <a href="https://www.eddiebauer.ca/">https://www.eddiebauer.ca/</a></p>
        <p>• Complete implementation of the experience from the integration with Vertex tax platform and internal microservices for order data management to deployment on the website and complete redesign of the checkout process on the e-commerce website.</p>
        <p>• Implemented the Adventure Rewards project, Gift Card (Buyatab), and redesign of the user experience on the checkout process pages. End to end.</p>
        <p>• Klarna integration as a payment method so the user could buy with credit.</p>
      </>
    ),
  },
  {
    date: ' ',
    location: 'Chile (Remote)',
    title: 'Nulogic.io, Fullstack Developer',
    content: (
      <>
        <p>• Part of a team of 5 people in charge to implement the new payment methods to integrate Vertex, a tax platform to calculate and manage taxes for US and Canada on the e-commerce website <a href="https://www.eddiebauer.com/">https://www.eddiebauer.com/</a> / <a href="https://www.eddiebauer.ca/">https://www.eddiebauer.ca/</a></p>
        <p>• Complete implementation of the experience from the integration with Vertex tax platform and internal microservices for order data management to deployment on the website and complete redesign of the checkout process on the e-commerce website.</p>
        <p>• Implemented the Adventure Rewards project, Gift Card (Buyatab), and redesign of the user experience on the checkout process pages. End to end.</p>
        <p>• Klarna integration as a payment method so the user could buy with credit.</p>
      </>
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
