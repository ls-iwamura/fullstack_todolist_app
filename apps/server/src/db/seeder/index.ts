// src/db/seeder/index.ts

import {client, db} from '..';
import {todos} from '../schema';

for (let i = 0; i < 10; i++) {
  await db.insert(todos).values({
    title: `Todo ${i}`,
    content: `Content ${i}`,
    status: 'todo',
    deadline: '2024/06/19',
  });
}

await client.end();

console.log('Seed completed!');
