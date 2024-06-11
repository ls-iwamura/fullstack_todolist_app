import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { config } from "dotenv";

config();

export const client = new pg.Client({
  connectionString: process.env.DATABASE_URL ?? "",
});

await client.connect();
export const db = drizzle(client);