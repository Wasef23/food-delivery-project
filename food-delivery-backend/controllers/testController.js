const testAPI = (req, res) => {
  res.json({
    success: true,
    message: "Backend API is working successfully"
  });
};

module.exports = { testAPI };
