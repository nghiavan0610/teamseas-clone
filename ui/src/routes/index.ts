import { Home } from '~/pages';
import { RouteProps } from './route.interface';
// import { RouteProps } from './route.interface';
import config from '~/config';

const publicRoutes: RouteProps[] = [{ path: config.routes.home, component: Home }];

const privateRoutes: RouteProps[] = [];

export { publicRoutes, privateRoutes };
