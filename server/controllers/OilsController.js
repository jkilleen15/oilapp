import Oil from "../models/Oil";

/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/

// get everything from the db
// nothing in braces, means find everything
// ref 900 - Database, pg 22
export function listOils(request, response) {
  Oil.find({}).exec()
  .then(oils => {
    return response.json(oils);
  });
}

// ref Mongoose Checklist, pg 11, How do we get one user/whatever?
export function showOil(request, response) {
  // mongodb knows to look for _id, standard
  Oil.findById(request.params.id).exec()
  .then(mov => {
    return response.json(mov);
  });
}

// ref Mongoose Checklist, pg 10, Save something to the database (insert, save)
export function createOil(request, response) {
  // we need to give Oil() an object will all the information
  // {body: "my oil"} = request.body
  const oil = new Oil(request.body);
  oil.save()
    .then(mov => {
      // returning the thing we just saved
      // a little redundant, but it now has it's db auto-created id
      // you don't need to return after saving, but standard/common practice
      return response.json(mov);
    });
}

/*
export function updateComment(request, response) {
  return response.json({theId: request.params.id});
}
*/

export function updateOil(request, response) {
  // we need to give Oil() an object will all the information
  // {body: "my oil"} = request.body
  console.log("update oil controller reached");
  Oil.findById(request.params.id).exec()
  .then(oil => { // UPDATE THIS NOW!
    oil.id = request.body.id || oil.id;
    oil.image = request.body.image || oil.image;
    oil.title = request.body.title || oil.title;
    // oil.date = request.body.date || oil.date;
    // oil.format = request.body.format || oil.format;
    // oil.genre = request.body.genre || oil.genre;
    // oil.plot = request.body.plot || oil.plot;
    oil.oilType = request.body.oilType || oil.oilType;
    oil.warnings = request.body.warnings || oil.warnings;
    oil.usage = request.body.usage || oil.usage;
    oil.application = request.body.application || oil.application;
    oil.bodySystems = request.body.bodySystems || oil.bodySystems;
    oil.properties = request.body.properties || oil.properties;
    oil.keywords = request.body.keywords || oil.keywords || [];
    oil.links = request.body.links || oil.links || [];

/*
id: "",
image: "",
title: "",

oilType: "",
warnings: [],
usage: [],
application: [], // !! ADD TO MODEL, UPDATE COMP
bodySystems: [],
properties: [],
keywords: [],
links: "",

*/

    /*
    usageOptions,
    applicationOptions,
    bodySystemsOptions,
    propertiesOptions,
    oilTypeOptions,
    keywordsOptions: [],
    linksOptions: [], check on this format
    warningOptions
    */

// UPDATE THIS NOW!!! not sure if we also need to round displayers...
    oil.oilTypeOptions = request.body.oilTypeOptions || oil.oilTypeOptions;
    oil.warningOptions = request.body.warningOptions || oil.warningOptions;
    oil.usageOptions = request.body.usageOptions || oil.usageOptions;
    oil.applicationOptions = request.body.applicationOptions || oil.applicationOptions;
    oil.bodySystemsOptions = request.body.bodySystemsOptions || oil.bodySystemsOptions;
    oil.propertiesOptions = request.body.propertiesOptions || oil.propertiesOptions;
    oil.keywordsOptions = request.body.keywordsOptions || oil.keywordsOptions;
    oil.linksOptions = request.body.linksOptions || oil.linksOptions;
    return oil.save();
  })
  .then(mov => {
    return response.json(mov);
  });
}

export function deleteOil(request, response) {
  console.log("delete oil controller reached");
  Oil.findByIdAndRemove(request.params.id).exec()
  // .then(alert("oil deleted!"))
  .then(oils => {
  // alert("oil deleted!");
    return response.json(oils);
  });
  // (alert("oil deleted!"));
}



/*
export function updateComment(request, response) {
  return response.json({theId: request.params.id});
}

// FUNCTIONS BELOW NOT UPDATED
export function removeComment(request, response) {
  return response.json(comments);
}
*/

// Alternate 'show' functions
/*
export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function show(request, response) {
  const commentId = request.params.id;
 // use this id to get from a database
  comments.findById(commentId);
}

export function show(request, response) {
  const commentId = request.params.id;
 // use this id to get from a database
  comments.findById(commentId);
  const thisComment = comments.findById(commentId) || {};
  return response.json(thisComment);
}

*/
