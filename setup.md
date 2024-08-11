# Setting Up the Node.js Project

## Step 1: Install Node.js LTS

Download and install the Node.js LTS (Long Term Support) version from the [official Node.js website](https://nodejs.org/).

## Step 2: Initialize the Project

1. Open your terminal or command prompt.
2. Create a new directory for your project and navigate into it:
   ```bash
   mkdir my-express-project
   cd my-express-project


### 2. `create-server.md`

```markdown
# Creating the Server File

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