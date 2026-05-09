import pool from "../config/db.js";

export const createUser = async (data) => {
  const conn = await pool.getConnection();

  const { name, email, password, role } = data;

  await conn.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, role]
  );

  conn.release();
};

export const findUserByEmail = async (email) => {
  const conn = await pool.getConnection();

  const rows = await conn.query(
    "SELECT * FROM users WHERE email=?",
    [email]
  );

  conn.release();
  return rows[0];
};