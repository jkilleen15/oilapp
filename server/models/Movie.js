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

/*
  image: {
    required: false,
    type: Array
  },
*/

  /*
  title: {
    // required: true,
    required: false,
    type: Array
  },
  */

  title: {
    // required: true,
    required: false,
    type: String
  },

  /*
  oilType: {
    // required: true,
    required: false,
    // type: Array
    type: Array
  },
  */

  oilType: {
    // required: true,
    required: false,
    // type: Array
    type: String
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
    type: Array
    // type: Array
  },

  // DISPLAY OPTIONS STATE
  /*
  oilTypeOptions,
  warningOptions,
  emotionsOptions,
  applicationOptions,
  bodySystemsOptions,
  propertiesOptions,

  keywordsOptions: [],
  linksOptions: [], check on this format

  */

  oilTypeOptions: {
    required: false,
    type: Object
    // type: Date, default: Date.now
  },

  warningOptions: {
    required: false,
    type: Object
    // type: Date, default: Date.now
  },
// remove?
  emotionsOptions: {
    required: false,
    type: Object
    // type: Date, default: Date.now
  },

  applicationOptions: {
    required: false,
    type: Object
    // type: Date, default: Date.now
  },

  bodySystemsOptions: {
    required: false,
    type: Object
    // type: Date, default: Date.now
  },

  propertiesOptions: {
    required: false,
    type: Object
    // type: Date, default: Date.now
  },

  keywordsOptions: {
    required: false,
    type: Object,
    value: "",
    label: "",
    // type: Date, default: Date.now
  },

  linksOptions: {
    required: false,
    type: Object,
    value: "",
    label: "",
    // type: Date, default: Date.now
  },

});

export default mongoose.model("Movie", schema);

// then, import this model into controller
