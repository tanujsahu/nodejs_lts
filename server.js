import express from 'express';
import morgan from 'morgan';
import routes from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // For parsing application/json
app.use(morgan('tiny'));

// Use the aggregated routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
