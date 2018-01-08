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

  /*
  emotionsOptions,
  applicationOptions,
  bodySystemsOptions,
  propertiesOptions,
  oilTypeOptions,
  keywordsOptions: [],
  linksOptions: [], check on this format
  warningOptions
  */

  warningOptions: {
    required: false,
    type: Object
    // type: Date, default: Date.now
  },
  /*
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
  */
  oilType: {
    // required: true,
    required: false,
    type: Array
  },
  warnings: {
    // required: true,
    required: false,
    type: Array
    // type: String,
    // type: Object,
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
    type: Array
  },
  links: {
    // required: true,
    required: false,
    type: String
    // type: Array
  },
});

export default mongoose.model("Movie", schema);

// then, import this model into controller
