import * as Material from "../models/material.model.js";

export const getAllMaterials = async (req, res) => {
  const data = await Material.getMaterials();
  res.json(data);
};

export const addMaterial = async (req, res) => {
  await Material.createMaterial(req.body);
  res.status(201).json({ message: "Material added" });
};

export const updateMaterial = async (req, res) => {
  await Material.updateMaterial(req.params.id, req.body);
  res.json({ message: "Updated" });
};

export const deleteMaterial = async (req, res) => {
  await Material.deleteMaterial(req.params.id);
  res.json({ message: "Deleted" });
};