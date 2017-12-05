// import products from "../products";

import Product from "../models/Product";

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
export function listProduct(request, response) {
  Product.find({}).exec()
  .then(products => {
    return response.json(products);
  });
}

// ref Mongoose Checklist, pg 11, How do we get one user/whatever?
export function showProduct(request, response) {
  // mongodb knows to look for _id, standard
  Product.findById(request.params.id).exec()
  .then(prod => {
    return response.json(prod);
  });
}

// ref Mongoose Checklist, pg 10, Save something to the database (insert, save)
export function createProduct(request, response) {
  // we need to give Comment() an object will all the information
  // {body: "my product"} = request.body
  const product = new Product(request.body);
  product.save()
    .then(prod => {
      // returning the thing we just saved
      // a little redundant, but it now has it's db auto-created id
      // you don't need to return after saving, but standard/common practice
      return response.json(prod);
    });
}

// FUNCTIONS BELOW NOT UPDATED
/*
export function updateProduct(request, response) {
  return response.json({theId: request.params.id});
}

export function removeProduct(request, response) {
  return response.json(products);
}
*/

// Alternate 'show' functions
/*
export function show(request, response) {
  return response.json({theId: request.params.id});
}

export function show(request, response) {
  const productId = request.params.id;
  // use this id to get from a database
  products.findById(productId);
});

export function show(request, response) {
  const productId = request.params.id;
  // use this id to get from a database
  const thisProduct = products.findById(productId);
  response.json(thisProduct);
});

*/
