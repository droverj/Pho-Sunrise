export function formatTime(timeString) {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  const formattedTime = `${formattedHours}:${minutes}${ampm}`;
  return formattedTime;
}