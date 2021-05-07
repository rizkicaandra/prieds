const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const access_token = req.headers.accesstoken;
    const decoded = jwt.verify(access_token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    next({ name: "custom", message: "unauthorized", statusCode: 401 });
  }
};

module.exports = authenticate;
