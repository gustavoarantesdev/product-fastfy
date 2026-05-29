import { app } from "./app.js";
import "dotenv";

const start = async () => {
  try {
    await app.listen({
      port: Number(process.env.PORT) || 3000,
    });
    app.log.info(`server listening`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
