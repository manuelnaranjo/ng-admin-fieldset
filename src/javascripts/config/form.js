'use strict';

function maFieldDelegate($delegate, $compile) {
  var directive = $delegate[0];
  var link = directive.link;
  directive.compile = function(){
    return function(scope, element) {
      const field = scope.field();
      if (field.type() !== 'fieldset'){
        link.apply(this, arguments);
        return;
      }

      const template = require('./fieldsetForm.html');
      element.append(template);
      scope.field = field;
      scope.entity = scope.entity();
      scope.form = scope.form();
      scope.datastore = scope.datastore();
      scope.type = field.type();
      $compile(element.contents())(scope);
    };
  };

  return $delegate;
}
maFieldDelegate.$inject = ['$delegate', '$compile'];

function config(NgAdminConfigurationProvider, $provide) {
  // override ma-field to add our necessary fieldset stuff
  $provide.decorator('maFieldDirective', maFieldDelegate);
}

config.$inject = ['NgAdminConfigurationProvider', '$provide'];

export default config;
