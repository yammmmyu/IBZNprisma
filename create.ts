import prisma from "./lib/prisma";

export async function main() {
  const createMany = await prisma.post.createMany({
    data: [],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
