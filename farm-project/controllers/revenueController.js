const Sale = require('../models/sale');

const calculateRevenue = async (req, res) => {
  try {
    const sales = await Sale.find();
    const revenue = sales.reduce((acc, sale) => acc + (sale.quantity * sale.price), 0);
    res.status(200).json({ revenue });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { calculateRevenue };
