'use strict';

function delegate($delegate) {
  var directive = $delegate[0];
  directive.template = require('./fieldsetShow.html');
  return $delegate;
}
delegate.$inject = ['$delegate'];

function config(NgAdminConfigurationProvider, $provide) {
  // override ma-field to add our necessary fieldset stuff
  $provide.decorator('maShowItemDirective', delegate);
}

config.$inject = ['NgAdminConfigurationProvider', '$provide'];

export default config;
