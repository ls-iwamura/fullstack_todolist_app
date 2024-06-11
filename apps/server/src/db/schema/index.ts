import {sql} from 'drizzle-orm';
import {date, pgTable, serial, text, varchar} from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: varchar('title', {length: 50}).notNull(),
  content: varchar('content', {length: 255}),
  status: text('status', {
    enum: ['todo', 'wip', 'done', 'pending', 'canceled'],
  })
    .default('todo')
    .notNull(),
  deadline: date('deadline', {mode: 'string'}),
  createdAt: date('created_at')
    .default(sql`now()`)
    .notNull(),
  updatedAt: date('updated_at')
    .default(sql`now()`)
    .notNull(),
});
