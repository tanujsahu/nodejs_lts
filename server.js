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
