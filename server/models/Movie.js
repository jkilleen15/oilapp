import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: {
    required: false,
    type: String
  },
  image: {
    required: false,
    type: String
  },
  title: {
    // required: true,
    required: false,
    type: String
  },
  date: {
    required: false,
    type: String
    // type: Date, default: Date.now
  },
  format: {
    required: false,
    type: String
  },
  genre: {
    // required: true,
    required: false,
    // type: String
    type: Array
  },
  plot: {
    // required: true,
    required: false,
    type: String
  },
  oilType: {
    // required: true,
    required: false,
    type: Array
  },
  warnings: {
    // required: true,
    required: false,
    type: Array
  },
  emotions: {
    // required: true,
    required: false,
    type: Array
  },
  application: {
    // required: true,
    required: false,
    type: Array
  },
  bodySystems: {
    // required: true,
    required: false,
    type: Array
  },
  properties: {
    // required: true,
    required: false,
    type: Array
  },
  keywords: {
    // required: true,
    required: false,
    type: String
  },
});

export default mongoose.model("Movie", schema);

// then, import this model into controller
