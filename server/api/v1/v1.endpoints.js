const read = (req, res) =>
  res.send({
    status: "success",
    code: 200,
    message: "OK",
    data: { status: "running", version: "1" },
  });

module.exports = {
  read,
};
