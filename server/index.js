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

const port = process.env.PORT || 4001;
myMovieServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

/*
import express from "express";
import bodyParser from "body-parser";

import commentRoutes from "./routes/CommentRoutes";
import contactRoutes from "./routes/ContactRoutes";
import productRoutes from "./routes/ProductRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/test");
mongoose.connect("mongodb://localhost/my-express-practice");

const myWebServer = express();
myWebServer.use(bodyParser.json());
myWebServer.use(commentRoutes);
myWebServer.use(contactRoutes);
myWebServer.use(productRoutes);
myWebServer.use(vehicleRoutes);

// const port = process.env.PORT || 4001;
const port = process.env.PORT || 3001;
myWebServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
*/
