const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ FIX
    req.user = { userId: decoded.userId };

    next();

  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { protect };