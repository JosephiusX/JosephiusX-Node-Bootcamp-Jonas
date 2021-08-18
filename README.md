Section 6 Express: Let's Start Building the Natours API

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
