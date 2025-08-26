import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import cors from '@fastify/cors';
import { registerDb } from './db/client.js';
import { composeRoutes } from './routes/compose.js';
import { config } from './config.js';

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });
await app.register(swagger, {
  openapi: {
    info: { title: 'SOR Composer API', version: '0.1.0' }
  }
});
await app.register(swaggerUI, { routePrefix: '/docs' });

registerDb(app);

app.get('/healthz', async () => ({ ok: true }));

app.register(composeRoutes, { prefix: '/compose' });

app.listen({ port: config.port, host: '0.0.0.0' })
  .then(() => app.log.info(`Listening on :${config.port}`))
  .catch((e) => {
    app.log.error(e);
    process.exit(1);
  });