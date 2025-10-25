export function calculateProfit(cost, price) {
  return (price - cost).toFixed(2);
}

export function formatCurrency(value) {
  return `${parseFloat(value).toFixed(2)} د.ع`;
}

export function applyDiscount(price, discount) {
  return (price * (1 - discount / 100)).toFixed(2);
}

