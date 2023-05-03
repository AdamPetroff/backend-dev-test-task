import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get(`/users/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params

  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  })

  res.json(user);
});

app.post(`/users`, async (req, res) => {
  const { name, email } = req.body

  const result = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.json(result)
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email
      },
    })

    res.json(user)
  } catch (error) {
    res.json({ error: `User with ID ${id} does not exist in the database` })
  }
});

app.delete(`/users/:id`, async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  })

  res.json(user);
});



app.get(`/posts/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })

  res.json(post);
});

app.post(`/posts`, async (req, res) => {
  const { title, content, authorId } = req.body

  const result = await prisma.post.create({
    data: {
      title,
      content,
      authorId
    },
  });

  res.json(result)
});

app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const user = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        title,
        content
      },
    })

    res.json(user)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
});

app.delete(`/posts/:id`, async (req, res) => {
  const { id } = req.params;

  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })

  res.json(post);
});

const server = app.listen(3000, () =>
  console.log(`Server ready at: http://localhost:3000`),
)
