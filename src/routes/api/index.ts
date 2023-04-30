import Router from 'koa-router'
import userRoutes from './user'

const routes = new Router({ prefix: '/api' });

routes.use(
  userRoutes.routes(),
);

export default routes;