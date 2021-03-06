const hash = require('./hash');

module.exports = (bloj) => {
  const hashed = hash(`${bloj.height}${bloj.nonce}${JSON.stringify(bloj.data)}${bloj.prevHash}${bloj.timestamp}`);

  if (bloj.hash === hashed) {
    return true;
  }

  return false;
};
