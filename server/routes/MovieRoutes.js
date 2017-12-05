import express from "express";
const router = express.Router();
// import {listComment,showComment,createComment,updateComment,removeComment}
import {listMovies,showMovie,createMovie}
from "../controllers/MoviesController";

router.get("/movies", listMovies);
router.get("/movies/:id", showMovie);
router.post("/movies", createMovie);
// router.put("/comments/:id", updateComment);
// router.delete("/comments/:id", removeComment);

export default router;
