const convertToReadableDate = isoDateString => {
  const date = new Date(isoDateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const readableDate = date.toLocaleDateString('en-US', options);
  return readableDate;
};

export default convertToReadableDate;
