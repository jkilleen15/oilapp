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

  usage: { // previously emotions!
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
  usageOptions,
  applicationOptions,
  bodySystemsOptions,
  propertiesOptions,

  keywordsOptions: [],
  linksOptions: [], check on this format

  */

  oilTypeOptions: {
    required: false,
    type: Object
    
  },

  warningOptions: {
    required: false,
    type: Object

  },

  usageOptions: {
    required: false,
    type: Object

  },

  applicationOptions: {
    required: false,
    type: Object

  },

  bodySystemsOptions: {
    required: false,
    type: Object

  },

  propertiesOptions: {
    required: false,
    type: Object

  },

  keywordsOptions: {
    required: false,
    type: Object,
    value: "",
    label: "",

  },

  linksOptions: {
    required: false,
    type: Object,
    value: "",
    label: "",

  },

});

export default mongoose.model("Oil", schema);

// then, import this model into controller
