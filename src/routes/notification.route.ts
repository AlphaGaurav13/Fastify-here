import { FastifyInstance } from "fastify";

import { addClient, removeClient, broadcast } from '../services/notification.service.js';

export async function notificationRoutes(
    fastify: FastifyInstance
) {
    fastify.get("/events", async (request, reply) => {

    })
}