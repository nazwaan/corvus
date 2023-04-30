import * as dotenv from 'dotenv'; dotenv.config({ path: '../../.env' });
import objection from 'objection'
import path from 'path'
import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    debug: true,
    client: process.env.DB_DRIVER,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: "utf8",
    },
    migrations: {
      directory: path.join(__dirname, "..", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "..", "seeds"),
    },
    ...objection.knexSnakeCaseMappers(),
  }
};

export default config;