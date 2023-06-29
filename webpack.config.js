
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var applyMmirWebpack = require('./mmir-webpack.config');
applyMmirWebpack(useDefaultConfig.dev);

//NOTE if IONIC_OPTIMIZE_JS is not 'true', prod uses copy of dev configuration -> must not apply multiple times
if (process.env.IONIC_OPTIMIZE_JS === 'true') {
  applyMmirWebpack(useDefaultConfig.prod);
}

/**
 * export the update ionic webpack configs (this still includes both dev & prod webpack configs)
 */
module.exports = function () {
  return useDefaultConfig;
};
