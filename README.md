### Setup
X yarn install, yarn start
X Don’t use this readme to figure out what code to type
X Use all other projects we have done as code examples
X Pick a real life thing to use as a model. Vehicle, Product, Oil …etc
X Implement 5 properties for this model.
n/a Make sure if you are on a windows machine you remove the single quotes from package.json

Oil
  Image
  Title
  Date Watched
  Format
  Genre
  Plot
  Keywords

SAVE FOR LATER
Oil
  name
  ok usage (internal, external, aroma only)
  external body
  aromatherapy
  internal body

## Client
X Client code goes in client/src

### React
X Create a function component that lists out a collection of your models (ListOfUsers)
  --> Main/ListOfOils
    X Use prop types to define what props the component needs
  ? REQUIRE It should probably need (require) a prop named after the plural of your model, and it should probably be an array
    // CollapsableMapper
    X Probably want to map over this array and create some divs or li’s showing 3 of the properties of the item
    X Create a Link on each item so you can navigate to the detail page

    X Create a button on each item so you can delete the item

X Create a class component that makes a new model (redux fetch practice)
      --> components/CreateOilListing
    X Create a form and a button
    X Put a label and an input for each property your model has

    X Bonus - use a drop down if there are a limited number of values for a property
      X add for genre, format

    X Register onChange for each input and use setState to store the information typed in
    X Register onSubmit for the form.
    X onSubmit call an action called createThing(change it to make sense for your model) -->createOil

X Create a function component that shows details of one thing (UserDetail)
  --> OilSingle
    X Use a prop that has the array of your models
    X Use a parameter from the route path /:id to find the model to show

  X Use whatever html you want to show all of the properties of your thing

X App.js
    X componentDidMount, call loadThings  -->loadOils

### React Router
X Import necessary components from react-router-dom into App.js
X Make sure to wrap everything in BrowserRouter

X Create a route to show the list container
  X Main / OilsContainer

X Create a route to show the create container
  X build CreateOilListingContainer as separate 'destination'

X Create a route to show the detail container.
  X OilSingleContainer
  X Make sure this route has a variable in it
X Make sure to wrap all routes in Switch

OK Create links to the list (NEED TO - currently resides on page) and
X create routes, put them anywhere in App.js outside of the Switch.

### Redux

    * The only state you need is an array of your models
        * state.js

    X Create actions for loading your models and models loaded
        X loadThings() - do a fetch get to “/things”
        X thingsLoaded(things) - THINGS_LOADED

    X Create an action for saving a new model
        X createThing(thing) - do a fetch post to “/things”
        X when the fetch is complete, dispatch to loadThings

    X Create an action for deleting an item
        X deleteThing(id) - do a fetch delete to “/things/” + id
        X when the fetch is complete, dispatch to loadThings

    X Create reducer for the state
        X care about the action THINGS_LOADED

    X Create containers for all of you components
        X mapStateToProps and mapDispatchToProps

        X The list component container should mapStateToProps for the array of things
        X The list component container should mapDispatchToProps for the deleteThing action

        X The new thing component container should mapDispatchToProps for the saveThingAction

        X AppContainer should mapDispatchToProps for loadThings.

## Server - use advanced-express-practice as an example
X The code for this goes in the /server folder
X Use express to create a server listening on port 3001
X Use mongoose to connect to a MongoDB database called “checkpoint2”
X Create a Model for your thing -->Oil.js
X Create a Route and Controller for your thing

X NEED TO CREATE DELETE
// UPDATE => SAME AS EDIT (RE: BONUS)

* In the Route,
X create routes for getting all things,
X getting one thing by id,
X deleting one thing,
updating one thing, and
X creating one thing

X In the Controller, create functions for list,show,create,remove(delete)
bonus - update

## Points
* When I yarn start, the web page loads with no errors - 10pts
* I can navigate to the list and create screen from links - 10pts
* I can enter information into the create screen and click save. If I go back to the list screen, that new information is there. - 20pts
* If I go to the list screen it will show all current existing information - 20pts
* The list screen has a view link for each item. If I click that link the detail screen appears. The details of the item are shown. - 20pts
* If I click the delete button on the list, the item I clicked will be removed from the list - 20pts


## Extra Credit
* Edit Component
  * Create a component to edit your things. It will be almost the same as the create component.
  * Use a prop that has the array of your models
  * Use a parameter from the route path /:id to find the model to show
  * Populate the properties of the model into the inputs
  * onSubmit populate the information from state back into the model, call a prop function called updateThing(thing)
* Create a container for the edit component
  * mapsStateToProps for the array of models
  * mapDispatchToProps for an action updateThing
* Create an action updateThing(thing)
  * do a fetch put to "/things/" + thing._id
  * when the fetch is complete, dispatch to loadThings
* In App.js, add a route to the edit container with a variable /:id
* In the list components,add a Link for the edit route.

## Bonus
* Create the edit component by reusing the create component
