import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/authController.js";

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();


router.get("/check-auth", verifyToken, checkAuth);

// Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Email Verification
router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
