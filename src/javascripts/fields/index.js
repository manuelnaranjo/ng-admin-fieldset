'use strict';

import FieldSet from "./FieldSet";
import RowField from "./RowField";

function config(nga) {
  nga.row = function(fields) {
    return new RowField().fields(fields);
  };

  nga.fieldset = function(name) {
    return new FieldSet(name);
  };

  nga.registerFieldType('fieldset', FieldSet);
  nga.registerFieldType('row', RowField);
}

config.$inject = ['NgAdminConfigurationProvider'];

export default config;
