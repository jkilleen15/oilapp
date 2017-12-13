import express from "express";
import bodyParser from "body-parser";
import movieRoutes from "./routes/MovieRoutes";
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");

const myMovieServer = express();
myMovieServer.use(bodyParser.json());
myMovieServer.use(movieRoutes);

const port = process.env.PORT || 3001;
myMovieServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
