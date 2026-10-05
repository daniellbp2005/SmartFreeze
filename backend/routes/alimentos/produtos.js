import express from "express";
import { addAlimentos, atualizarProduto, deletarProduto, listAlimentos } from "../../lib/functions.js";

const router = express.Router();

router.get("/", listAlimentos);

router.post("/:id", addAlimentos);

router.put("/:id", atualizarProduto);

router.delete("/:id", deletarProduto);

export default router;