import Fastify from "fastify";
import productRoutes from "./routes/product.route.js";

export const app = Fastify({ logger: true });

app.register(productRoutes, { prefix: "/products" });
