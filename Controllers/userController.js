const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addUser(req, res) {
  const { firstName, lastName, email } = req.body;
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
    },
  });
  res.status(201).send({ user });
}

async function getAllUsers(req, res) {
  const users = await prisma.user.findMany();
  res.status(200).send({ users });
}

module.exports = { addUser, getAllUsers };
