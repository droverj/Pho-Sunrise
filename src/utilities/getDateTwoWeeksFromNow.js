export function getDateTwoWeeksFromNow() {
  const currentDate = new Date();

  // Calculate the date two weeks from now
  const twoWeeksFromNow = new Date(currentDate);
  twoWeeksFromNow.setDate(currentDate.getDate() + 14);

  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  return twoWeeksFromNow.toLocaleDateString(undefined, options);
}