exports.home = (req, res) => {
  res.sendFile('index.js');
  console.log("It's home!");
};
