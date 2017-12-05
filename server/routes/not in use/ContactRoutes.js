import express from "express";
const router = express.Router();
// import {listContact,showContact,createContact,updateContact,removeContact}
import {listContact,showContact,createContact}
from "../controllers/ContactsController";

router.get("/contacts", listContact);
router.get("/contacts/:id", showContact);
router.post("/contacts", createContact);
// router.put("/contacts/:id", updateContact);
// router.delete("/contacts/:id", removeContact);

export default router;
