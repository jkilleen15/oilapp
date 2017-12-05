import express from "express";
const router = express.Router();
// import {listProduct,showProduct,createProduct,updateProduct,removeProduct}
import {listProduct,showProduct,createProduct}
from "../controllers/ProductsController";


router.get("/products", listProduct);
router.get("/products/:id", showProduct);
router.post("/products", createProduct);
// router.put("/products/:id", updateProduct);
// router.delete("/products/:id", removeProduct);

export default router;
