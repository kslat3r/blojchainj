const instance = require('./lib/instance');
const onReady = require('./lib/events/on-ready');
const logger = require('./lib/logger');

instance.createServer();
instance.createNode({
  onReady,
});

setInterval(() => {
  logger.info(instance.getNode().getPeers());
}, 10000);
