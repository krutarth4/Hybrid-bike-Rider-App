
var path = require('path');

var implRoot = 'src/mmir/';

//NOTE paths specifications must be absolute or relative to project root
var paths = {
  //overwrite / replace MMIR config values for using ionic-specific implementations:
  'mmirf/controllerManager': implRoot + 'custom/ionicControllerManager',
  'mmirf/viewLoader': implRoot + 'custom/ionicViewLoader',
  'mmirf/simpleViewEngine': implRoot + 'custom/ionicViewEngine'
};

var includeModules = [
  'util/extendDeep'//FIXME build-config for src/mmir/mmir-plugin-speech-io (copied from build-config of mmir-plugin-speech-io)
];

var includePlugins = [

  // 'mmir-plugin-speech-android',
  {id: 'mmir-plugin-speech-android', config: {
    env: 'android',
    // voice: {de: 'female', en: 'female'},
    language: {en: 'eng-USA'}
  }},

  // FIXME due to incompatibilities, a slightly modified version of the plugin is "hard-copied" to src/mmir/mmir-plugin-speech-io
  // {id: 'mmir-plugin-speech-io', config: {
  //   enableInterimResults: true,//<- enable interim results for commands as well as for dictation
  //   preventDialogManagerInit: true,//<- do not auto start/initialize dialog manager, since we make no use of it
  //   // eos: true, // <- use end-of-speech detection for stopping speech-input
  //   soundFeedbackEnabled: false,// disable sound for click-/touch-feedback
  //   // alternativeResults: 5,
  //   // command: {
  //   //   languageModel: 'dictation'
  //   // }
  // }}
];

// var grammarOptions = {
//   // path: 'src/mmir_config/languages',
//   engine: 'jison',
//   asyncCompile: true
// };

//FIXME build-config for src/mmir/mmir-plugin-speech-io (copied from build-config of mmir-plugin-speech-io)
var stateMachineOptions = {
  models: {
    speechio: {
      moduleId: 'mmirf/speechioManager',
      mode: 'extended',
      file: path.resolve(__dirname, 'src/mmir/mmir-plugin-speech-io/states/dialog.xml')
    },
    speechioInput: {
      moduleId: 'mmirf/speechioInput',
      mode: 'extended',
      file: path.resolve(__dirname, 'src/mmir/mmir-plugin-speech-io/states/input.xml')
    }
  }
};

const logLevel = 'warn';

const mmirAppConfig = {
  config: {
    //reduce log-level for state-machines to avoid exessive log-output
    'mmirf/inputManager': {
      logLevel: 'info'
    },
    'mmirf/dialogManager': {
      logLevel: 'info'
    },
    'mmirf/logger': {
      // trace: {depth: 'full'},
      logLevel: logLevel
    },
  },
  paths: paths,
  includeModules: includeModules,

  includePlugins: includePlugins,

  resourcesPath: implRoot,

  // grammars: grammarOptions,
  // settings: settingOptions,
  states: stateMachineOptions,

  configuration: {
     language: 'de',

    //FIXME runtime configuration for mmir-plugin-speech-io
    speechio: {
      enableInterimResults: true,//<- enable interim results for commands as well as for dictation
      preventDialogManagerInit: true,//<- do not auto start/initialize dialog manager, since we make no use of it
      // eos: true, // <- use end-of-speech detection for stopping speech-input
      soundFeedbackEnabled: false,// disable sound for click-/touch-feedback
    }
  }
};

const webpack = require('webpack');

module.exports = function(webpackConfig){

  // console.log('webpackConfig: ', webpackConfig)
  // console.log('webpackConfig: ', webpackConfig.module.rules)
  try{
    require('mmir-webpack')(webpack, webpackConfig, mmirAppConfig);
  } catch(err){
    console.log(err);
    throw err;
  }

  return webpackConfig;
}
