// import vehicles from "../vehicles";

import Vehicle from "../models/Vehicle";

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
export function listVehicle(request, response) {
  Vehicle.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

// ref Mongoose Checklist, pg 11, How do we get one user/whatever?
export function showVehicle(request, response) {
  // mongodb knows to look for _id, standard
  Vehicle.findById(request.params.id).exec()
  .then(veh => {
    return response.json(veh);
  });
}

// ref Mongoose Checklist, pg 10, Save something to the database (insert, save)
export function createVehicle(request, response) {
  // we need to give Comment() an object will all the information
  // {body: "my comment"} = request.body
  const vehicle = new Vehicle(request.body);
  vehicle.save()
    .then(veh => {
      // returning the thing we just saved
      // a little redundant, but it now has it's db auto-created id
      // you don't need to return after saving, but standard/common practice
      return response.json(veh);
    });
}

// FUNCTIONS BELOW NOT UPDATED
/*
export function updateVehicle(request, response) {
  return response.json({theId: request.params.id});
}

export function removeVehicle(request, response) {
  return response.json(vehicles);
}
*/

// Alternate 'show' functions

/*
export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function show(request, response) {
  const vehicleId = request.params.id;
 // use this id to get from a database
  vehicles.findById(vehicleId);
}

export function show(request, response) {
  const vehicleId = request.params.id;
 // use this id to get from a database
  const thisVehicle = vehicles.findById(vehicleId);
  response.json(thisVehicle);
}
*/
