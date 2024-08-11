let items = []; // In-memory storage for demonstration

export const createItem = (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: 'ID and name are required' });
  }
  const newItem = { id, name };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const getAllItems = (req, res) => {
  res.json(items);
};

export const getItemById = (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
};

export const updateItem = (req, res) => {
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
};

export const deleteItem = (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  items.splice(itemIndex, 1);
  res.status(204).end(); // No content
};
