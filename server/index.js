import express from "express";
import bodyParser from "body-parser";
import oilRoutes from "./routes/OilRoutes";
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");

const myOilServer = express();
myOilServer.use(bodyParser.json());
myOilServer.use(oilRoutes);

const port = process.env.PORT || 3001;
myOilServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
