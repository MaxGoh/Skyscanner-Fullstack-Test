export default minutes => {
  let hour = Math.floor(minutes / 60);
  let minute = minutes - (60 * hour);

  return `${hour}h ${minute}`;
};