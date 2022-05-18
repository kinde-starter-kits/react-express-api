const express = require("express");
const endpoints = require("./books.endpoints");
const router = express.Router();

router.get("/", endpoints.index);

module.exports = router;
