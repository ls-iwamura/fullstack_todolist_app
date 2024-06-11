import {serve} from '@hono/node-server';
import {Hono} from 'hono';
import {db} from './db';
import {eq} from 'drizzle-orm';
import {cors} from 'hono/cors';
import {todos} from './db/schema';

const app = new Hono();

app.use('/api/*', cors());
app.use(
  '/*',
  cors({
    origin: 'http://localhost:8080',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  }),
);
app.get('/', c => {
  return c.text('Hello Hono!');
});

app.get('/todos', async c => {
  const data = await db.select().from(todos);
  return c.json(data);
});

app.post('/todos', async c => {
  const params = await c.req.json<typeof todos.$inferSelect>();
  const result = await db.insert(todos).values({
    title: params.title,
    content: params.content,
    deadline: params.deadline,
  });
  return c.json(result);
});

app.put('/todos/:id', async c => {
  const id = parseInt(c.req.param('id'));
  if (Number.isNaN(id)) {
    return c.json({error: 'invalid ID'}, 400);
  }
  const params = await c.req.json<typeof todos.$inferSelect>();
  const result = await db
    .update(todos)
    .set({
      title: params.title,
      content: params.content,
      status: params.status,
      deadline: params.deadline,
    })
    .where(eq(todos.id, id));

  return c.json(result);
});

// eslint-disable-next-line drizzle/enforce-delete-with-where
app.delete('/todos/:id', async c => {
  const id = parseInt(c.req.param('id'));
  if (Number.isNaN(id)) {
    return c.json({error: 'invalid ID'}, 400);
  }
  const result = await db.delete(todos).where(eq(todos.id, id));
  return c.json(result);
});

const port = 4000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
