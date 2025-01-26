const express = require('express');
const connectDB = require('./config/db');
const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');
const salesController = require('./controllers/salesController');
const revenueController = require('./controllers/revenueController');
const customersController = require('./controllers/customersController');

const app = express();

//Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.post('/users', userController.createUser);
app.get('/users', userController.getUsers);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.post('/expenses', expenseController.createExpense);
app.get('/expenses', expenseController.getExpenses);

app.post('/sales', salesController.createSale);
app.get('/sales', salesController.getSales);
app.get('/sales/revenue', revenueController.calculateRevenue);

app.post('/customers', customersController.createCustomer);
app.get('/customers', customersController.getCustomers);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});