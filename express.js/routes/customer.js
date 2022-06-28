const home = (req, res,next) => {
  res.send("res home");
  res.status(200)
  // next();
};

exports.home = home;
