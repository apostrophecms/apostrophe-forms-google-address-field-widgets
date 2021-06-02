const countries = require('./countries');

module.exports = {
  extend: 'apostrophe-forms-base-field-widgets',
  label: 'Google Address',
  beforeConstruct (self, options) {
    options.addFields = [
      {
        name: 'placeholder',
        label: 'Placeholder',
        type: 'string',
        help: 'Text to display in the field before someone uses it (e.g., to provide additional directions).'
      },
      {
        name: 'types',
        label: 'Google Places Autocomplete Type',
        type: 'select',
        htmlHelp: '<a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete" target="_blank">More information here</a>',
        choices: [
          {
            value: '',
            label: 'All'
          }, {
            value: 'geocode',
            label: 'Geocode'
          }, {
            value: 'address',
            label: 'Address'
          }, {
            value: 'establishment',
            label: 'Establishment'
          }, {
            value: '(regions)',
            label: 'Regions'
          }, {
            value: '(cities)',
            label: 'Cities'
          }
        ]
      },
      {
        name: 'origin',
        label: 'Origin',
        type: 'boolean',
        htmlHelp: 'The origin point from which location from which the distance to a place result is calculated. <a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete" target="_blank">More information here</a>',
        choices: [
          {
            value: true,
            showFields: [
              'originLatitude', 'originLongitude'
            ]
          }
        ]
      },
      {
        name: 'originLatitude',
        label: 'Origin Latitude',
        type: 'float',
        required: true
      },
      {
        name: 'originLongitude',
        label: 'Origin Longitude',
        type: 'float',
        required: true
      },
      {
        name: 'bounds',
        label: 'Bounds',
        type: 'boolean',
        htmlHelp: 'The area in which to search for places. <a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete" target="_blank">More information here</a>',
        choices: [
          {
            value: true,
            showFields: [
              'strictBounds', 'northEastLatitude', 'northEastLongitude', 'southWestLatitude', 'southWestLongitude'
            ]
          }
        ]
      },
      {
        name: 'northEastLatitude',
        label: 'North East Latitude Bound',
        type: 'float',
        required: true
      },
      {
        name: 'northEastLongitude',
        label: 'North East Longitude Bound',
        type: 'float',
        required: true
      },
      {
        name: 'southWestLatitude',
        label: 'South West Latitude Bound',
        type: 'float',
        required: true
      },
      {
        name: 'southWestLongitude',
        label: 'South West Longitude Bound',
        type: 'float',
        required: true
      },
      {
        name: 'strictBounds',
        label: 'Strict Bounds',
        type: 'boolean',
        htmlHelp: 'Returns only those places that are strictly within the region defined by the given bounds. <a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete" target="_blank">More information here</a>'
      },
      {
        name: 'countries',
        label: 'Countries',
        type: 'array',
        titleField: 'country',
        limit: 5,
        help: 'Restrict search to one or multiple countries (5 at max due to Google restriction). Might be not compatible with origin or bounds values.',
        schema: [
          {
            name: 'country',
            label: 'Country',
            type: 'select',
            choices: countries
          }
        ]
      }, {
        name: 'splitAddress',
        label: 'Split Address',
        type: 'boolean',
        choices: [
          {
            value: true,
            showFields: [ 'addressParts', 'displaySplitAddress' ]
          }
        ],
        def: false
      },

      // {
      //   name: 'addressPartss',
      //   label: 'Address Parts',
      //   type: 'object',
      //   help: 'Optional: choose fields to split address to',
      //   schema: [
      //     {
      //       name: 'street_number',
      //       label: 'Street Number',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'Street Number Label',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split Street Number',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: true
      //         }
      //       ]
      //     },
      //     {
      //       name: 'route',
      //       label: 'Route',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'Route Label',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split Route',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: true
      //         }
      //       ]
      //     },
      //     {
      //       name: 'locality',
      //       label: 'City',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'City Label',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split City',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: true
      //         }
      //       ]
      //     },
      //     {
      //       name: 'sublocality_level_1',
      //       label: 'City (for NYC area)',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'City Label (for NYC area)',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split City (for NYC area)',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: false
      //         }
      //       ]
      //     },
      //     {
      //       name: 'administrative_area_level_1',
      //       label: 'State',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'State Label',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split State',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: true
      //         }
      //       ]
      //     },
      //     {
      //       name: 'postal_code',
      //       label: 'Postal Code',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'Postal Code Label',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split Postal Code',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: true
      //         }
      //       ]
      //     },
      //     {
      //       name: 'postal_town',
      //       label: 'Postal Code (for UK and Sweden)',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'Postal code Label (for UK and Sweden)',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split Postal Code (for UK and Sweden)',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: false
      //         }
      //       ]
      //     },
      //     {
      //       name: 'country',
      //       label: 'Country',
      //       type: 'object',
      //       schema: [
      //         {
      //           label: 'Country Label',
      //           name: 'label',
      //           type: 'string'
      //         },
      //         {
      //           label: 'Split Country',
      //           name: 'splitted',
      //           type: 'boolean',
      //           def: true
      //         }
      //       ]
      //     }

      //   ]
      // },

      {
        name: 'addressParts',
        label: 'Address Parts',
        type: 'checkboxes',
        help: 'Optional: choose fields to split address to',
        choices: [ {
          value: 'street_number',
          label: 'Street Number'
        },
        {
          value: 'route',
          label: 'Route'
        },
        {
          value: 'locality',
          label: 'City'
        },
        {
          value: 'sublocality_level_1',
          label: 'City (for NYC area)'
        },
        {
          value: 'administrative_area_level_1',
          label: 'State'
        },
        {
          value: 'postal_code',
          label: 'Postal Code'
        },
        {
          value: 'postal_town',
          label: 'Postal Code (for UK and Sweden)'
        },
        {
          value: 'country',
          label: 'Country'
        } ],
        def: [ 'street_number', 'route', 'locality', 'administrative_area_level_1', 'postal_code', 'country' ]
      },
      {
        name: 'displaySplitAddress',
        label: 'Display Split Address',
        help: 'Display broken out fields in the form or not. Fields will still be saved in the database.',
        type: 'boolean',
        def: false
      }
    ].concat(options.addFields || []);

    options.arrangeFields = [
      {
        name: 'settings',
        label: 'Basic settings',
        fields: [
          'fieldLabel',
          'fieldName',
          'required',
          'googleApiKey',
          'placeholder'
        ]
      },
      {
        name: 'advanced',
        label: 'Advanced settings',
        fields: [
          'types',
          'origin',
          'originLatitude',
          'originLongitude',
          'bounds',
          'northEastLatitude',
          'northEastLongitude',
          'southWestLatitude',
          'southWestLongitude',
          'strictBounds',
          'countries',
          'splitAddress',
          'addressParts',
          'displaySplitAddress'
        ]
      }
    ].concat(options.arrangeFields || []);
  },
  construct (self, options) {
    self.on('apostrophe-pages:beforeSend', 'addGoogleApiKey');
    self.addGoogleApiKey = function (req) {
      req.data.googleApiKey = options.googleApiKey;
    };

    self.sanitizeFormField = function (req, form, widget, input, output) {
      if (widget.splitAddress && widget.addressParts && widget.addressParts.length) {
        for (const addressPart of widget.addressParts) {
          output[`${widget.fieldName}-${addressPart}`] = self.apos.launder.string(input[`${widget.fieldName}-${addressPart}`]);
        }
      }
      output[widget.fieldName] = self.apos.launder.string(input[widget.fieldName]);
    };
  }
};
