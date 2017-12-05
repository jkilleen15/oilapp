import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
});

export default mongoose.model("Product", schema);

// then, import this model into controller
