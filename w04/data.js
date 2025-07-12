exports.myDateTime = function() {
  const date = new Date();
  const options = { timeZone: 'Asia/Manila', dateStyle: 'full', timeStyle: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
