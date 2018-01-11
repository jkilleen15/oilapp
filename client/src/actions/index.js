// OILS
/*
X Create actions for loading your models and models loaded
    X loadThings() - do a fetch get to “/things”
    X thingsLoaded(things) - THINGS_LOADED
*/

export function loadOils() {
  return function (dispatch) {
    fetch("/oils")
    .then( (response) => {
      return response.json();
    }).then((oils) => {
      dispatch(oilsLoaded(oils));
    });
  };
}
function oilsLoaded(oils) {
  return {
    type: "OILS_LOADED",
    value: oils
  };
}

// SINGLE OIL
/*
X Create an action for saving a new model
    X createThing(thing) - do a fetch post to “/things”
    X when the fetch is complete, dispatch to loadThings
*/

export function createOil(m) {
  return function (dispatch) {
    fetch("/oils", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(m)
    }).then(() => dispatch(createOilDone()))
    .then(() => dispatch(loadOils()));
  };
}

function createOilDone(newOil) {
  alert('new oil added!')
  return {
    type: "CREATE_OIL_DONE",
    value: newOil
  };
}


export function getOil(id) {
  return function (dispatch) {
    fetch(`/oils/${id}`)
    .then( (response) => {
      return response.json();
    }).then((oil) => {
      dispatch(getOilDone(oil));
    });
  };
}

function getOilDone(oil) {
  return {
    type: "GET_OIL_DONE",
    value: oil
  };
}

// Create an action for updating an item

export function updateOil(m) {
  console.log("update oil reached");
  console.log("oil id: " + m.id);
  return function (dispatch) {
    fetch("/oils/" + m.id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(m)
    })
    .then(() => dispatch(updateOilDone()))
    .then(() => dispatch(loadOils())) // ;
    .then(console.log("updated props! " + m.warnings));
  };
}

function updateOilDone(updatedOil) {
  alert("oil listing updated!")
  return {
    type: "UPDATE_OIL_DONE",
    value: updatedOil
  };
}


/*
* Create an action for deleting an item
    * deleteThing(id) - do a fetch delete to “/things/” + id
    * when the fetch is complete, dispatch to loadThings

*/

export function deleteOil(id) {
  console.log("delete oil reached");
  console.log("id: " + id);
  return function (dispatch) {
    fetch(`/oils/${id}`, {
      method: "DELETE"
    })
     .then(console.log("fetch complete"))
     .then(() => dispatch(loadOils()))
     .then(() => dispatch(deleteOilDone()));
  };
}
function deleteOilDone() {
  console.log("oil deleted!");
  return {
    type: "DELETE_OIL_DONE",
  };
}
