import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // req.query.id if i wanted to use the query params
  const post = await prisma.post.update({
    where: {
      id: req.body.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  res.status(200).json({ post });
}
