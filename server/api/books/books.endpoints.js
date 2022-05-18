const index = (req, res) =>
  res.send({
    status: "success",
    code: 200,
    message: "OK",
    data: {
      books: [
        { id: "ab", title: "hawk" },
        { id: "cd", title: "something else" },
      ],
    },
  });

module.exports = {
  index,
};
