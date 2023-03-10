import Fastify from "fastify";
import Cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(Cors);

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany({});
  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP ServerRunning!");
  });
