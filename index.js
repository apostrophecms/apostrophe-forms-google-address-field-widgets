const countries = require('./countries');

module.exports = {
  extend: 'apostrophe-forms-base-field-widgets',
  label: 'Google Address',
  addFields: [
    {
      name: 'googleApiKey',
      label: 'Google API key',
      type: 'string',
      required: true
    },
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
    }
  ],
  beforeConstruct (self, options) {
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
          'countries'
        ]
      }
    ].concat(options.arrangeFields || []);
  }
};
