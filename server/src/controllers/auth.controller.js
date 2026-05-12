import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/jwt.js";
import * as User from "../models/user.model.js";

// SIGNUP
export const signup = async (req, res) => {
  console.log("🟢 SIGNUP START");

  try {
    const { name, email, password, role } = req.body;
    console.log("📩 Signup Data:", email);

    const hashed = bcrypt.hashSync(password, 8);
    console.log("🔐 Password hashed");

    await User.createUser({
      name,
      email,
      password: hashed,
      role,
    });

    console.log("✅ USER CREATED");

    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error("❌ SIGNUP ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  console.log("🔥 LOGIN START");

  try {
    const { email, password } = req.body;
    console.log("📩 Email:", email);

    const user = await User.findUserByEmail(email);
    console.log("👤 User:", user);

    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const valid = bcrypt.compareSync(password, user.password);
    console.log("🔐 Password match:", valid);

    if (!valid) {
      console.log("❌ Wrong password");
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      SECRET,
      { expiresIn: "1d" }
    );

    console.log("✅ TOKEN CREATED");

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });

    console.log("🚀 RESPONSE SENT");
  } catch (err) {
    console.error("❌ LOGIN ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};