const countries = require('../countries');

module.exports = (options, addressParts) => {
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

    {
      name: 'addressParts',
      label: 'Address Parts',
      type: 'object',
      help: 'Optional: choose fields to split address to',
      schema: Object.entries(addressParts).map(([ key, {
        label, splitLabel, disabledLabel, def
      } ]) => {
        return {
          name: key,
          type: 'object',
          schema: [
            {
              label,
              name: 'label',
              type: 'string'
            },
            {
              label: splitLabel,
              name: 'splitted',
              type: 'boolean',
              def
            },
            {
              label: disabledLabel,
              name: 'disabled',
              type: 'boolean',
              def: true
            }
          ]
        };
      })
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
};
