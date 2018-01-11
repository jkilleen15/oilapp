## Welcome to my e-ssentials app!
### Setup
X yarn install
X mondod
X yarn start

- This application is designed for a user to manage a collection of essential oils.

- Users can build out there collection with name, type (single or blend), images (url links are displayed for visual customization), application (aromatic, internal, topical), warnings (i.e. volatile), uses (depression, cooking, etc.), properties (i.e. antibacterial), body systems effected (i.e. immune system), keywords (users choice!) and reference links (i.e. article about use, article that prompted their purchase, recipe, blend recommendations).

## Highlights:
* Users can easily create and update oil listing to best manage and utilize their collection
* Users can easily retrieve oils with dynamic search
* Intended to be discoverable and forgiving
* Structure and functionality are adaptable and customizable for future projects.
* Consistent naming allows for the framework to be adapted to manage various collections (i.e. books, movies, superheroes, i.e.)

## General Functionality
* Enter yarn start, web page loads with no errors
* ROUTES - From landing screen navigate to create screen and oil detail/oil single screens. Searchable and static list reside on landing page (/)
* CURRENT LIST - Two hide/show lists display all current existing information. Searchable list default is set to show.
* DYNAMIC SEARCH - Search list (oil collection) dynamically by keyword(s) in combination of fields (oil name(title), oil type, application, usage, properties, keywords)
* CREATE LISTING - Enter information into create screen fields and save. Return to the list screen,
see new information is there.
* Navigate to oil details/oil single page via quick link or link within oil listing block
* Navigate to update/edit oil listing from oil details/oil single page
* Enter, update or delete information within update screen and save. Return to the list screen,
or oil details/oil single screen, to confirm updated values.
* Delete items from landing page by clicking labeled delete button within corresponding listing. Item is removed from list/collection.
* Feedback alerts appear to user when oils are created, updated or deleted.
* Visit oil-specific urls by clicking links on oil details/oil single screen, opens new window

## Client
X Client code in client/src

### React

### React Router
X Components from react-router-dom imported into App.js
X Everything wrapped in BrowserRouter

X Routes created in App.js
  X Show Oil list containers (Searchable and Static)
  X Show Create oil container
  X Show Oil Details/Single container
  X Show Update oil container
  X All routes wrapped in Switch

X In OilRoutes.js, routes created for
X getting all things,
X getting one thing by id,
X deleting one thing,
X updating one thing, and
X creating one thing

### Redux

    X state is array of models (i.e. state.js)

    X Actions for loading your models and models loaded
        X loadThings() - do a fetch get to “/things”
        X thingsLoaded(things) - THINGS_LOADED

    X Action for saving a new model
        X createThing(thing) - do a fetch post to “/things”
        X when the fetch is complete, dispatch to loadThings

    X Action for deleting an item
        X deleteThing(id) - do a fetch delete to “/things/” + id
        X when the fetch is complete, dispatch to loadThings

    X reducer for the state
        X care about the action THINGS_LOADED

    X Containers for all components
        X mapStateToProps and mapDispatchToProps
        X list component container mapStateToProps for the array of oils
        X list component container mapDispatchToProps for the deleteOil action
        X create new oil component container mapDispatchToProps for the saveOilAction
        X AppContainer mapDispatchToProps for loadOils.

## Server - use advanced-express-practice as an example
X Code for this in /server folder (index.js)
X Express used to create a server listening on port 3001
X Mongoose used to connect to a MongoDB database called “oilAppDB”
X Oil Model created
X Oil Route and Controller created

## Ideas for further development
- Transition to Heroku
- Explore/implement React inherent component functionality
- Fetch to API for initial dropdown options (i.e. oil name (title), usage)
- Transition dropdown options from single-option specific to global (users may use something they entered in another oil, create new 'defaults')
- Enhanced Input Validation and User Feedback
- Login/Authentication
- CSS/Bootstrap, etc. styling
