export function calculateDiscount(total) {
  // Calculate 10% of the amount
  const tenPercent = 0.1 * total;

  // Format the result as a dollar amount
  const formattedResult = tenPercent.toFixed(2);

  return formattedResult;
}