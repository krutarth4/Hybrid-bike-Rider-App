
var defaultConfig = require('@ionic/app-scripts/config/uglifyjs.config.js');

//modification: need to keep class-names (and function names, i.e. "quasi-class-names") for "reflection"-like usage in code
defaultConfig.mangle = {
  keep_classnames: true,
  keep_fnames: true
};
defaultConfig.compress.keep_classnames = true;
defaultConfig.compress.keep_fnames = true;

// console.log('using custom uglifyjs/modification ... ', defaultConfig);

//DISABLED "minimal" preservation of class-names: is not enough due to reflection-like usage of view-names in navigation-helper etc!
// //preserve class-names that are used for "reflection" code
// defaultConfig.mangle = {
//   reserved: ['InputTextTComponent', 'InputTextareaTComponent', 'InputNumberTComponent', 'InputTComponent', 'AssessmentFormFieldTComponent']
// };

module.exports = defaultConfig;
