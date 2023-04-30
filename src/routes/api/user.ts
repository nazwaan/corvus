import Router from 'koa-router'
import { DefaultContext } from 'koa'
import UserController from '../../controllers/user-controller'

const routes = new Router({ prefix: '/users' });

routes.get('/:id', async (ctx: DefaultContext) => {
  const userController = new UserController()
  ctx.body = await userController.find(ctx);
})

export default routes;