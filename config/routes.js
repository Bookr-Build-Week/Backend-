const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticate, jwtKey } = require("../auth/authenticate");
const Users = require("../data/user-model");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/users", getUsers);
  server.get("/api/users/:id", getUserById);
  server.put("/api/users/:id", updateUsers);
};

function getUserById(req, res) {
  let id = req.params.id;
  Users.findById(id)
    .then(user => {
      console.log(user)
      res.status(200).json({ user });
    })
    .catch(err => {
      res.send(err);
    });
}

function updateUsers(req, res) {
  let id = req.params.id;
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.updateById(id, user)
    .then(updatedUser => {
      res.status(201).json(updatedUser);
    })
    .catch(error => {
      res.status(500).json({
        message: `Check updateUsers function routes.js`,
        error: `${error}`
      });
    });
}

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({
        message: `Check register function routes.js`,
        error: `${error}`
      });
    });
}

function login(req, res) {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
          user
        });
      } else {
        res
          .status(401)
          .json({ message: "Check username and password and try again" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Server error, check login function on routes.js",
        error: `${error}`
      });
    });
}
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const option = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, jwtKey, option);
}


function getUsers(req, res) {
  Users.find()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err => {
      res.send(err);
    });
}
