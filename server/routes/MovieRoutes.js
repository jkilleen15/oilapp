import express from "express";
const router = express.Router();
// add deleteMovie
import {listMovies,showMovie,createMovie,deleteMovie}
from "../controllers/MoviesController";

router.get("/movies", listMovies);
router.get("/movies/:id", showMovie);

router.get("/movies/create", createMovie);
router.post("/movies", createMovie);

router.delete("/movies/:id", deleteMovie);

export default router;
