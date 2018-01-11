import express from "express";
const router = express.Router();
import {listOils,showOil,createOil,updateOil, deleteOil}
from "../controllers/OilsController";

router.get("/oils", listOils);
router.get("/oils/:id", showOil);

router.get("/oils/create", createOil);
router.post("/oils", createOil);

router.put("/oils/:id", updateOil);

router.delete("/oils/:id", deleteOil);

export default router;
