import mongoose from "mongoose";

const schema = new mongoose.Schema({
  year: {
    required: true,
    type: String
  },
  make: {
    required: true,
    type: String
  },
  model: {
    required: true,
    type: String
  },
});

export default mongoose.model("Vehicle", schema);

// then, import this model into controller
