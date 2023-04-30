import * as dotenv from 'dotenv'; dotenv.config()
import Knex from 'knex'
import objection from 'objection'
import knexConfig from './config/knexfile'
import Koa from "koa"
import routes from './routes'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);
objection.Model.knex(knex);

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(routes.routes());

const port: number = Number(process.env.API_PORT) || 3000;

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});