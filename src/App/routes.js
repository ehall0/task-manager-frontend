

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
    
  ]

  export { routes };