const addressParts = require('./lib/addressParts');

module.exports = {
  extend: 'apostrophe-forms-base-field-widgets',
  label: 'Google Address',
  beforeConstruct (self, options) {
    require('./lib/schema')(options, addressParts);
  },

  afterConstruct (self) {
    require('./lib/migrations')(self, addressParts);
  },

  construct (self, options) {
    self.sanitizeFormField = function (req, form, widget, input, output) {
      const parts = Object.keys(widget.addressParts);
      if (widget.splitAddress && parts && parts.length) {
        for (const addressPart of parts) {
          output[`${widget.fieldName}-${addressPart}`] = self.apos.launder.string(input[`${widget.fieldName}-${addressPart}`]);
        }
      }
      output[widget.fieldName] = self.apos.launder.string(input[widget.fieldName]);
    };
  }
};
