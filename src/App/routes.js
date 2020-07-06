import About from "../About";
import Contact from "../Contact";
import Jobs from "../Jobs";
import Home from "../Home";

const routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home',
    },
    {
        path: '/jobs',
        component: Jobs,
        name: 'Jobs',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
    {
        path: '/contact-us',
        component: Contact,
        name: 'Contact',
    },
  ]

  export { routes };