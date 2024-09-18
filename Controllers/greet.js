function greet(req, res) {
  const name = req.body.name;
  res.status(201).send({ message: "Hello " + name });
}

module.exports = greet;
