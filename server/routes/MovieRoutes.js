import express from "express";
const router = express.Router();
// add deleteMovie
import {listMovies,showMovie,createMovie,deleteMovie}
from "../controllers/MoviesController";

router.get("/movies", listMovies);
router.get("/movies/:id", showMovie);
router.get("/movies/create", createMovie); // ?
router.post("/movies/create", createMovie); // ?
router.post("/movies", createMovie);
// add delete
router.delete("/movies/:id", deleteMovie);
// router.delete("/movies", deleteMovie);
// router.get("/movies/:id", deleteMovie);
router.delete("/movies", deleteMovie);
// router.delete("/", deleteMovie);

export default router;
