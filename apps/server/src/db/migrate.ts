// src/db/migrate.ts

import {migrate} from 'drizzle-orm/node-postgres/migrator';

import {client, db} from './index.js';

await migrate(db, {migrationsFolder: './drizzle'});
await client.end();
console.log('Migration completed!');
