import type { FastifyInstance } from "fastify";

import  { addClient, removeClient, broadcast } from '../services/notification.service.ts';

export async function notificationRoutes(
    fastify: FastifyInstance
) {
    fastify.get("/events", async (request, reply) => {
        reply.raw.writeHead(200, {
            "Content-type": "text/event-stream",
            "Cache-control": "no-cache",
            Connection: "keep-alive"
        });

        reply.raw.write("data: Connected\n\n");


        addClient(reply.raw);

        request.raw.on("close", () => {
            removeClient(reply.raw);
        });
    });

    fastify.post<{
        Body: {
            message: string;
        };
    }>("/notify", async (request) => {
        broadcast(request.body.message);

        return {
            success: true,
        };
    });
}