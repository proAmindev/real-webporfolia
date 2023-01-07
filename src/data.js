//  icons
import {
  FiYoutube,
  FiInstagram,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/Group 4.png';
import UpworkBrandIcon from './assets/img/brands/Group 5.png';
import FiverBrandIcon from './assets/img/brands/Group 6.png';
import BehanceBrandIcon from './assets/img/brands/Group 7.png';
import DribbbleBrandIcon from './assets/img/brands/Group 8.png';

// projects images
import Project1 from './assets/img/projects/IMG_1463.JPG';
import Project2 from './assets/img/projects/IMG_7292.JPG';
import Project3 from './assets/img/projects/IMG_7293.JPG';
import Project4 from './assets/img/projects/france.jpg';
import Project5 from './assets/img/projects/italy.jpg';
import Project6 from './assets/img/projects/mobile.jpg';

// skills images
import SkillImg1 from './assets/img/skills/cupcut 1.png';
import SkillImg2 from './assets/img/skills/download 1.png';
import SkillImg3 from './assets/img/skills/images 1.png';
import SkillImg4 from './assets/img/skills/shazam 1.png';
import SkillImg5 from './assets/img/skills/vn 1.png';



// import SkillImg6 from './assets/img/skills/nodejs.png';
// import SkillImg7 from './assets/img/skills/git.png';
// import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/results?search_query=turkona_cooking%5C'
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/turkona_cooking/'
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'pizza',
    category: 'Top food',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'Top food',
  },
  {
    id: '3',
    image: Project3,
    name: 'Tartalet',
    category: 'Top food',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  // {
  //   name: 'Top food',
  // },
  // {
  //   name: 'Mobilegraphy',
  // },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at turkona@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Tashkent, Uzbekistan',
    description: 'Serving clients worldwide',
  },
];
