import express from "express";
import { signup, login } from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Signup new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: admin
 *             email: admin@gmail.com
 *             password: 123456
 *             role: engineer
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/signup", signup);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: admin@gmail.com
 *             password: 123456
 *     responses:
 *       200:
 *         description: Login success
 */
router.post("/login", login);

export default router;