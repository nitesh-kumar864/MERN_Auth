import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next(); 
  }
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId; // store ID for later
    next(); 
  } catch (error) {
    console.error("Error in verifyToken:", error);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - Invalid token" });
  }
};
