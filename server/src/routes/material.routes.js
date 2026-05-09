import express from "express";
import {
  getAllMaterials,
  addMaterial,
  updateMaterial,
  deleteMaterial,
} from "../controllers/material.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/materials:
 *   get:
 *     summary: Get all materials
 *     tags: [Materials]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of materials
 */
router.get("/", getAllMaterials);

/**
 * @swagger
 * /api/materials:
 *   post:
 *     summary: Add material
 *     tags: [Materials]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Cement
 *             qty: 50
 *             cost: 300
 *     responses:
 *       201:
 *         description: Material added
 */
router.post("/", addMaterial);

/**
 * @swagger
 * /api/materials/{id}:
 *   put:
 *     summary: Update material
 *     tags: [Materials]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             name: Steel
 *             qty: 100
 *             cost: 500
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/:id", updateMaterial);

/**
 * @swagger
 * /api/materials/{id}:
 *   delete:
 *     summary: Delete material
 *     tags: [Materials]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete("/:id", deleteMaterial);

export default router;