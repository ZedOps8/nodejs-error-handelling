const express = require('express');
const app = express();
app.use(express.json());

// Dummy data for users (in-memory database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 },
];

// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get a user by ID
app.get('/api/users/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    // Create a custom error and pass it to the next() function
    const error = new Error('User not found');
    error.status = 404;
    next(error);
  }

  res.json(user);
});

// Create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user by ID
app.put('/api/users/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    const error = new Error('User not found');
    error.status = 404;
    return next(error);
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  res.json(users[userIndex]);
});

// Delete a user by ID
app.delete('/api/users/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    const error = new Error('User not found');
    error.status = 404;
    return next(error);
  }

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
