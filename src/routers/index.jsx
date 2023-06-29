import Comics from '~/pages/Comics/Comics';
import config from '../config';

// Layouts

// Pages
import Home from '../pages/Home';
import Search from '../pages/Search';

// Public routes

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.comics, component: Comics },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
