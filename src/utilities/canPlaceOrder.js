export function canPlaceOrder() {
  const currentDay = new Date().getDay();
  const currentTime = new Date();

  // Define the restaurant's hours
  const hours = [
    { day: 0, open: 11 * 60, close: 20 * 60 },
    { day: 1, open: -1, close: -1 }, // CLOSED on Monday
    { day: 2, open: 11 * 60, close: 20 * 60 },
    { day: 3, open: 11 * 60, close: 20 * 60 },
    { day: 4, open: 11 * 60, close: 20 * 60 },
    { day: 5, open: 11 * 60, close: 21 * 60 },
    { day: 6, open: 11 * 60, close: 21 * 60 },
  ];

  const today = hours.find((hour) => hour.day === currentDay);

  if (today) {
    const openTime = today.open;
    const closeTime = today.close;

    // Convert the current time to minutes since midnight
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

    // Check if the current time is within the open and close times
    return currentMinutes >= openTime + 30 && currentMinutes <= closeTime - 30;
  }

  return false; // Restaurant is closed today
}