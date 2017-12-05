import express from "express";
const router = express.Router();
// import {listVehicle,showVehicle,createVehicle,updateVehicle,removeVehicle}
import {listVehicle,showVehicle,createVehicle}
from "../controllers/VehiclesController";

router.get("/vehicles", listVehicle);
router.get("/vehicles/:id", showVehicle);
router.post("/vehicles", createVehicle);
// router.put("/vehicles/:id", updateVehicle);
// router.delete("/vehicles/:id", removeVehicle);

export default router;
