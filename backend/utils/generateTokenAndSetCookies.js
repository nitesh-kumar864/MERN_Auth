import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (res, user) => {
  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,                
    sameSite: isProduction ? "none" : "lax", 
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,      
  });

  return token;
};

export default generateTokenAndSetCookies;
