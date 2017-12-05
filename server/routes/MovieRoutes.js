import express from "express";
const router = express.Router();
// add deleteMovie
import {listMovies,showMovie,createMovie}
from "../controllers/MoviesController";

router.get("/movies", listMovies);
router.get("/movies/:id", showMovie);
router.get("/movies/create", createMovie); // ?
router.post("/movies/create", createMovie); // ?
router.post("/movies", createMovie);
// add delete
// router.delete("/movies/:id", removeMovie);

export default router;
