const express = require("express");
const endpoints = require("./v1.endpoints");
const router = express.Router();

router.get("/", endpoints.read);

module.exports = router;
