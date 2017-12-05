// import contacts from "../contacts";

import Contact from "../models/Contact";

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
export function listContact(request, response) {
  Contact.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}

// ref Mongoose Checklist, pg 11, How do we get one user/whatever?
export function showContact(request, response) {
  // mongodb knows to look for _id, standard
  Contact.findById(request.params.id).exec()
  .then(con => {
    return response.json(con);
  });
}

// ref Mongoose Checklist, pg 10, Save something to the database (insert, save)
export function createContact(request, response) {
  // we need to give Comment() an object will all the information
  // {body: "my contact"} = request.body
  const contact = new Contact(request.body);
  contact.save()
    .then(con => {
      // returning the thing we just saved
      // a little redundant, but it now has it's db auto-created id
      // you don't need to return after saving, but standard/common practice
      return response.json(con);
    });
}

// FUNCTIONS BELOW NOT UPDATED
/*
export function updateContact(request, response) {
  return response.json({theId: request.params.id});
}

export function removeContact(request, response) {
  return response.json({});
}
*/

// Alternate 'show' functions

/*
export function show(request, response) {
 return response.json({theId: request.params.id});
}

export function show(request, response) {
  const contactId = request.params.id;
 // use this id to get from a database
  contacts.findById(contactId);
}

export function show(request, response) {
  const contactId = request.params.id;
 // use this id to get from a database
  const thisContact = contacts.findById(contactId);
  response.json(thisContact);
}
*/
