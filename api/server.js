const express = require("express");
const rateLimit = require("express-rate-limit");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

server.use(limiter);
server.use(express.json());
server.use("/api/schemes", SchemeRouter);

module.exports = server;
