lSection 6 Express: Let's Start Building the Natours API

50.   Setting up Express and Basic Routing

          npm init -y
          npm i express@4
          touch app.js
          require express in it

          instead of res.send I can res.json to send json objects

51.   APIs and RESTful API Design

              REST - Representational State Transfer - making api's easy and logical to consume
                  1. Seperate API into logical resources
                      Resource: Object or representation of something, which has data associated to it. any information that can be named can be a resource
                          tours  users  reviews

                  2. Exposed structured, resource-based URL'S
                          https://www.natours.com/addNewTour

                  3. Use HTTP methods (verbs)
                      POST : create
                      GET : read
                      PUT : update whole
                      PATCH : update part
                      DELETE : delete

                  4. Send data as JSON (usefully)
                      like js objects but all the keys are strings

                  5. Must be statless
                      Stateless RESTful API: All state is handled on the client. This means that each request must contain all the information nessessary to process a certian request the server should not have to remember previous requests

52.   Starting Our API : Handling GET Requests

          what we will be building
              https://www.natours.dev/api/v1/tours

53.   Handling POST Requests

54.   Responding to URL Parameters

## 55. Handling PATCH Requests

## 56. Handling DELETE Requests

## 57. Refactor

## 58. Middleware and the request response cycle

## 59. Creating Our Own Middleware

## 60. Using 3rd-Party Middleware

        npm middleware for denelopment
            npm i@1.9.1

## 61. Implementing the 'Users' Routes

## 62. creating ang mounting multiple routes

## 63. a better file structure

        mkdir routes
            in it touch tourRouts.js and userRoutes.js

        mkdir controllers
            in it touch tourController.js and userController.js

## 64. Param Middleware

            ??????? get tour route giving me 500
                    - git stash reveals the problem is not likely on this commit
                    - the route and middle ware seem to be working , so maybe its a logic issue in the route( controller)
                    - it is properly validating the validity of the id if I type a Id that dosent exist?
                    so how can id be undefined
            ******* i changed const to exports. on some variables in get route and update route by accident

## 65. Chaining Multiple Middleware Functions

## 66. Serving Static Files

to access something from our file system, we need to use a built in express middleware

## 67. Environment Variables

            touch config.env

            npm i dotenv
                require in server.js

            I have the USER set to jonas instead on USERNAME , because USERNAME is already taken.

??????? not sure if this lesson is done properly

## 68. Setting up esLing + Prettier in VS Code

          eslint": "^5.16.0",
         "eslint-config-airbnb": "^17.1.0",
         "eslint-config-prettier": "^4.1.0",
         "eslint-plugin-import": "^2.17.2",
         "eslint-plugin-node": "^8.0.1",
         "eslint-plugin-prettier": "^3.0.1",
         "eslint-plugin-react": "^7.12.4",
         "prettier": "^1.17.0"

eslint not working

## sec 7

## 73 Creating a local Database

        BASIC COMMANDS:
            - use natours-test

            - db.tours.insertOne({name: "The Forest Hiker", price:297, rating:4.7})

            - show dbs

            - use.admin

            - use natours-test

            - show collections

            - quit()

## 74 CRUD: Creating Documents

            create 2 documents at once
                db.tours.insertMany([{name: "The Sea Explorer", price: 498, rating: 4.8}, {name: "The Show Adveture", price:997, rating: 4.9, difficulty:"easy"}])

                // they can have different structure

## 75 CRUD: (Reading) Documents

        finds all in collection:
            db.tours.find()

        or with search criteria:
            db.tours.find({name: "The Forest Hiker"})
            db.tours.find({difficulty: "easy"})

        tour with price < 500:
            db.tours.find({ price: {$lte: 500}})

        with 2 search criteria both true( price < 500 &&  rating >=  4.8):
            db.tours.find({price: {$lt: 500}, rating: {$gte: 4.8}})

        2 search criteria one true (price > 500 || rating <= 4.8) :
            db.tours.find({ $or: [price: {$lt: 500}}, {rating: {$gte: 4.8}} ] })
                // we start with an or operator and an array of criteria, only one needs to be true

        select field in an object:
            db.tours.find({price: {$gte: 500}, rating: {$gte: 4.8}}, {name: 1})
                // only shows name output and id and excludes other fields

plus theres a bunch more operators to learn about

## 76 CRUD: Updating Documents

selecting tour by name and resetting price:

            db.tours.updateOne({ name: "The Snow Adventure"}, { $set: {price: 597}})
                ???? acknoledged but no matchcount and modifiedcount are 0.
                ***** mispelled in db Adveture
                ???? still not working

create new properties and give them new values

            db.tours.updateMany({price: {$gt: 500}, rating: {$gt: 4.8} }, {$set: {premium: true}})
                // selected tour with price greater than 500 and rating greater than 4.8, and gave it a value of primium with a key of true

## 77 CRUD: Deleting Documents

        delete object with rating lower than 4.8
            db.tours.deleteMany({rating: {$lt: 4.8}})

        delete entire collection:
            db.tours.deleteMany({})

## 78. Using Compass App for CRUD Operations

## 79. Creating a Hosted Database with Atlas

## 80. Connecting to our hosted database

we are going to do our dev in atlas instead of locally

        in Database Access create new user and generate password, as well as the template for connecting
            fill in password and username as instructed

        click connect btn on the database cluster in atlas
            select compass option

        enter connetion template with credentials

        click create database

        whitelist ip address on atlas
            data access > add ip address > 0.0.0.0/0
                allows access from anywhere

        connect mongo shell to cluster
            databases > connect > Mongo Db Shell >

        follow instructions and save string for use in app

        close out of current mongo shell if nessessary

        paste connection string after mongo in command line:
            mongo "mongodb+srv://cluster0.ftpuy.mongodb.net/natours" --username natours-user

            // result:
                 MongoDB Enterprise atlas-6nslgw-shard-0:PRIMARY>

        show dbs
            should show database we created

        switch to natours:
            use natours

        find tours:
            db.tours.find()

## sec8 Using MongoDB with Mongoose

## 82. Connecting Our Database with the Express App

to get the connection string for use in app

        in atlas
            databases > connect > connect to your application
                follow directions and copy connection string
        create it as env variable DATABASE

        make variable for local database while were at it

install mongoose driver

        npm i mongoose@5

        we configure in server.js file

setup server.js file to require mongoose, set the password in in the env file, and setup mongoose connection logic

    const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    const app = require('./app');

    dotenv.config({ path: './config.env' });

    const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
    );

    mongoose
    .connect(DB, {
        userNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    });

then we drop tour database to start fresh

## 84. What is Mongoose?

## 85. Creating simple tour model

set up tour model in server.js for now

    const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'], // error message
        unique
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
    });
    const Tour = mongoose.model('Tour', tourSchema);

## 85. Creating Documents and Testing the Model

create document from our code with our mongoose model

    const testTour = new Tour({
    name: 'The Forest Hiker',
    rating: 4.7,
    price: 497
    });

    testTour
    .save()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.log('ERROR 💥:', err);
    });

## 86. Intro to Back-End Architecture:MVC, Types of Logic, and More

    MODEL: buisness logic
        Code that actually solves the business problem we set out to solve;
        Directly related to business rules, how the business works, and business needs;
        Examples:
            -Creating new tours in the database;
            -Checking if user’s password is correct;
            -Validating user input data;
            -Ensuring only users who bought a tour can review it

    CONTROLLER: application logic
        Code that is only concerned about the application’s implementation, not the underlying business problem we’re trying to solve (e.g. showing and selling tours);
        Concerned about managing requests and responses;
        About the app’s more technical aspects;
        Bridge between model and view layers

    VIEW: presentation logic

Fat models/thin controllers: offload as much logic as possible into the models, and keep the controllers as simple and lean as possible.

we cant always entirely seporate buisness logic and application logic , but its the goal

## 87. Refactoring for MVC

        mkdir models
            in it touch tourModel.js

        cut schema from server js into tourModel.js

        require mongoose in tourModel.js

        export tours from tourModel.js

        require it in tourController

        comment out line 6 in tourRoutes

## 88 Another Way of Creating Documents

## 89 Reading Documents

\_id is the name of mongo ids

## 90. Updating Documents

## 91. Delete Documents

## 92. Modelling the Tours

## 93. Importing Development
