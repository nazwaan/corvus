import Router from 'koa-router'
import apiRoutes from './api'

const routes = new Router();

routes.use(
	apiRoutes.routes(),
);

export default routes;