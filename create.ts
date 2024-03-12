import prisma from "./lib/prisma";

export async function main() {
  const createMany = await prisma.post.createMany({
    data: [
      { title: "Check On It", content: "488 Rodrick Hollow", authorId: "1" },
      {
        title: "Vision of Love",
        content: "80310 Telly Parkways",
        authorId: "2",
      },
      {
        title: "Turn! Turn! Turn! (To Everything There is a Season)",
        content: "536 Armstrong Curve",
        authorId: "3",
      },
      {
        title: "Let's Stay Together",
        content: "218 Yundt Ports",
        authorId: "4",
      },
    ],
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
