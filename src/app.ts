import Fastify from 'fastify'


const app = Fastify({
    logger:true,
})

app.get("/", async () => {
    return {
        message: "Hello Fastify"
    };
});

app.listen({
    port: 3000,
});