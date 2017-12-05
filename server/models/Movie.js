import mongoose from "mongoose";

const schema = new mongoose.Schema({
  image: {
    required: false,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  date: {
    required: false,
    type: String
  },
  format: {
    required: false,
    type: String
  },
  genre: {
    required: true,
    type: String
  },
  plot: {
    required: true,
    type: String
  },
  keywords: {
    required: true,
    type: String
  },
});

export default mongoose.model("Movie", schema);

// then, import this model into controller
