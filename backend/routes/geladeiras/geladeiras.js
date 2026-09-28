import express from "express";
import { addGeladeira, atualizarGeladeira, deletarGeladeira, listGeladeira } from "../../lib/functions.js";

const router = express.Router();

router.get("/", listGeladeira);

router.post("/", addGeladeira);

router.put("/:id", atualizarGeladeira);

router.delete("/:id", deletarGeladeira);

export default router;