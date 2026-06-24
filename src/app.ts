import Fastify from 'fastify'

import { notificationRoutes } from "./routes/notification.route.ts"

const app = Fastify({
    logger: true
});



app.register(notificationRoutes);

app.listen({
    port: 3000,
})