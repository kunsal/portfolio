import Home from "../components/home";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Experience from "../components/experience";

const pages = [{
    name: 'Home',
    link: '/',
    component: Home
  },
  {
    name: 'About',
    link: '/about',
    component: About,
    options: {
      title: 'About Us'
    }
  },
  {
    name: 'Experience',
    link: '/experience',
    component: Experience
  },
  {
    name: 'Projects',
    link: '/projects',
    component: Projects
  },
  {
    name: 'Contact',
    link: '/contact',
    component: Contact
  },
];

export default pages;