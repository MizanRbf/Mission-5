import { prisma } from "./lib/prisma";

async function run() {
  const createUser = await prisma.user.create({
    data: {
      name: "Mizan",
      email: "mizanrbf@next.com",
    },
  });
  console.log("Created user", createUser);
}
run();
