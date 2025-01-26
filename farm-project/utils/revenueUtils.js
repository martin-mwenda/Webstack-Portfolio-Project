// Utility function to calculate revenue based on sales
const calculateRevenue = (sales) => {
    let totalRevenue = 0;
    sales.forEach(sale => {
      totalRevenue += sale.amount;
    });
    return totalRevenue;
  };
  
  module.exports = { calculateRevenue };
  