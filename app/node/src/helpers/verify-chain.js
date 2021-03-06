const verifyBloj = require('./verify-bloj');

module.exports = (chain, start = 0, end = 0) => {
  end = end || chain.length;

  chain = chain
    .sort((a, b) => a.height - b.height)
    .slice(start, end);

  for (let i = 1; i < chain.length; i++) {
    if (!verifyBloj(chain[i])) {
      return false;
    }
  }

  return true;
};
