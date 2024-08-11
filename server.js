// server.js
import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // For parsing application/json
app.use(morgan('tiny'));

let items = []; // In-memory array to store items

// Create: POST /items
app.post('/items', (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: 'ID and name are required' });
  }
  const newItem = { id, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read: GET /items
app.get('/items', (req, res) => {
  res.json(items);
});

// Read: GET /items/:id
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// Update: PUT /items/:id
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  items[itemIndex] = { id, name };
  res.json(items[itemIndex]);
});

// Delete: DELETE /items/:id
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  items.splice(itemIndex, 1);
  res.status(204).end(); // No content to send back
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
