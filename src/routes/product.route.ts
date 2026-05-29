import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function produtRoutes(app: FastifyInstance) {
  app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world" };
  });
}
