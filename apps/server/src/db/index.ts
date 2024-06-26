import {config} from 'dotenv';
import {drizzle} from 'drizzle-orm/node-postgres';
import pg from 'pg';

config();

export const client = new pg.Client({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  connectionString: process.env.DATABASE_URL ?? '',
});

await client.connect();
export const db = drizzle(client);
