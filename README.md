Section 6 Express: Let's Start Building the Natours API

50. Setting up Express and Basic Routing

        npm init -y
        npm i express@4
        touch app.js
        require express in it

        instead of res.send I can res.json to send json objects

51. APIs and RESTful API Design

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
