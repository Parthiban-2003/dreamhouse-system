import pool from "../config/db.js";

export const getMaterials = async () => {
  const conn = await pool.getConnection();
  const rows = await conn.query("SELECT * FROM materials");
  conn.release();
  return rows;
};

export const createMaterial = async (data) => {
  const conn = await pool.getConnection();

  await conn.query(
    "INSERT INTO materials (name, qty, cost) VALUES (?, ?, ?)",
    [data.name, data.qty, data.cost]
  );

  conn.release();
};

export const updateMaterial = async (id, data) => {
  const conn = await pool.getConnection();

  await conn.query(
    "UPDATE materials SET name=?, qty=?, cost=? WHERE id=?",
    [data.name, data.qty, data.cost, id]
  );

  conn.release();
};

export const deleteMaterial = async (id) => {
  const conn = await pool.getConnection();

  await conn.query("DELETE FROM materials WHERE id=?", [id]);

  conn.release();
};