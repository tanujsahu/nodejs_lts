# Setting Up the Node.js Project

## Step 1: Install Node.js LTS

Download and install the Node.js LTS (Long Term Support) version from the [official Node.js website](https://nodejs.org/).

## Step 2: Initialize the Project

1. Open your terminal or command prompt.
2. Create a new directory for your project and navigate into it:
   ```bash
   mkdir my-express-project
   cd my-express-project

## Step 1: Create `server.js`

1. In the root of your project directory, create a new file named `server.js`.

2. Add the following code to `server.js`:

   ```javascript
   // server.js
   import express from 'express';
   import morgan from 'morgan';

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Use morgan for logging
   app.use(morgan('tiny'));

   // Basic route
   app.get('/', (req, res) => {
     res.send('Hello, world!');
   });

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });

## Open a web browser and go to http://localhost:3000. You should see Hello, world! displayed.

## This project provides a simple CRUD (Create, Read, Update, Delete) API using Node.js and Express. It demonstrates how to manage items with basic in-memory storage, showcasing the use of different HTTP methods for various operations.

## API Endpoints
# Create Item
## HTTP Method: POST
## Endpoint: /items
      Description: Creates a new item.
      Purpose: This method is used to add a new item to the in-memory store.
      Request Body: 
      {
        "id": "string",
        "name": "string"
      }

      Success Response:

      {
        "id": "string",
        "name": "string"
      }

      201 Created if the item is successfully created.

      400 Bad Request if the id or name is missing in the request body.

## Read All Items
# HTTP Method: GET
## Endpoint: /items
      Description: Retrieves all items.
      Purpose: This method fetches a list of all items stored in memory.
      Response:

      [
        {
          "id": "string",
          "name": "string"
        }
      ]

      Status Codes:
      200 OK if the request is successful.

## Read Single Item
# HTTP Method: GET
## Endpoint: /items/:id
      Description: Retrieves a specific item by its id.
      Purpose: This method is used to fetch details of a single item identified by its id.
      Response:

      {
        "id": "string",
        "name": "string"
      }

      Status Codes:
      200 OK if the item is found.

      404 Not Found if the item with the specified id does not exist.

## Update Item
# HTTP Method: PUT
## Endpoint: /items/:id
      Description: Updates an existing item’s name.
      Purpose: This method modifies the name of an item identified by its id.
      Request Body:

      {
        "name": "string"
      }
      Success Response:

      {
        "id": "string",
        "name": "string"
      }

      Status Codes:
      200 OK if the item is successfully updated.

      400 Bad Request if the name is missing in the request body.

      404 Not Found if the item with the specified id does not exist.

## Delete Item
# HTTP Method: DELETE
## Endpoint: /items/:id
      Description: Deletes an item by its id.
      Purpose: This method removes an item from the in-memory store based on its id.
      Response: No content.

      Status Codes:
      204 No Content if the item is successfully deleted.

      404 Not Found if the item with the specified id does not exist.
      Error Handling

      400 Bad Request: Indicates that the request contains invalid or missing data.

      404 Not Found: Indicates that the requested item does not exist.