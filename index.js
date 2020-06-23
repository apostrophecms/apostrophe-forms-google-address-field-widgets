module.exports = {
  extend: 'apostrophe-forms-base-field-widgets',
  label: 'Google Address',
  addFields: [
    {
      name: 'googleApiKey',
      label: 'Google API key',
      type: 'string',
      required: true,
    },
    {
      name: 'placeholder',
      label: 'Placeholder',
      type: 'string',
      help: 'Text to display in the field before someone uses it (e.g., to provide additional directions).'
    },
    {
      name: 'offset',
      label: 'Offset',
      type: 'integer',
      htmlHelp: 'The position, in the input term, of the last character that the service uses to match predictions. <a href="https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests" target="_blank">More information here</a>'
    },
    {
      name: 'origin',
      label: 'Origin',
      type: 'string',
      htmlHelp: 'The origin point from which to calculate straight-line distance to the destination. Must be specified as latitude,longitude. <a href="https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests" target="_blank">More information here</a>'
    },
    {
      name: 'location',
      label: 'Location',
      type: 'string',
      htmlHelp: 'The point around which you wish to retrieve place information. Must be specified as latitude,longitude. <a href="https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests" target="_blank">More information here</a>'
    },
    {
      name: 'radius',
      label: 'Radius',
      type: 'float',
      htmlHelp: 'The distance (in meters) within which to return place results. <a href="https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests" target="_blank">More information here</a>'
    },
    {
      name: 'strictBounds',
      label: 'Strict Bounds',
      type: 'boolean',
      htmlHelp: 'Returns only those places that are strictly within the region defined by location and radius. <a href="https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests" target="_blank">More information here</a>'
    },
    {
      name: 'language',
      label: 'Language',
      type: 'select',
      choices: [{
        value: '',
        label: '---'
      }, {
        value: 'af',
        label: 'Afrikaans'
      }, {
        value: 'sq',
        label: 'Albanian'
      }, {
        value: 'am',
        label: 'Amharic'
      }, {
        value: 'ar',
        label: 'Arabic'
      }, {
        value: 'hy',
        label: 'Armenian'
      }, {
        value: 'az',
        label: 'Azerbaijani'
      }, {
        value: 'eu',
        label: 'Basque'
      }, {
        value: 'be',
        label: 'Belarusian'
      }, {
        value: 'bn',
        label: 'Bengali'
      }, {
        value: 'bs',
        label: 'Bosnian'
      }, {
        value: 'bg',
        label: 'Bulgarian'
      }, {
        value: 'my',
        label: 'Burmese'
      }, {
        value: 'sq',
        label: 'Albanian'
      }, {
        value: 'ca',
        label: 'Catalan'
      }, {
        value: 'zh',
        label: 'Chinese'
      }, {
        value: 'zh',
        label: 'Chinese'
      }, {
        value: 'zh',
        label: 'Chinese'
      }, {
        value: 'zh',
        label: 'Chinese'
      }, {
        value: 'zh',
        label: 'Chinese'
      }, {
        value: 'zh',
        label: 'Chinese'
      }, {
        value: 'zh-CN',
        label: 'Chinese (Simplified)'
      }, {
        value: 'zh-HK',
        label: 'Chinese (Hong Kong)'
      }, {
        value: 'zh-TW',
        label: 'Chinese (Traditional)'
      }, {
        value: 'hr',
        label: 'Croatian'
      }, {
        value: 'cs',
        label: 'Czech'
      }, {
        value: 'da',
        label: 'Danish'
      }, {
        value: 'nl',
        label: 'Dutch'
      }, {
        value: 'en',
        label: 'English'
      }, {
        value: 'en-AU',
        label: 'English (Australian)'
      }, {
        value: 'en-GB',
        label: 'English (Great Britain)'
      }, {
        value: 'et',
        label: 'Estonian'
      }, {
        value: 'fi',
        label: 'Finnish'
      }, {
        value: 'fil',
        label: 'Filipino'
      }, {
        value: 'fr',
        label: 'French'
      }, {
        value: 'fr-CA',
        label: ' (Canada)'
      }, {
        value: 'gl',
        label: 'Galician'
      }, {
        value: 'ka',
        label: 'Georgian'
      }, {
        value: 'de',
        label: 'German'
      }, {
        value: 'el',
        label: 'Greek'
      }, {
        value: 'gu',
        label: 'Gujarati'
      }, {
        value: 'iw',
        label: 'Hebrew'
      }, {
        value: 'gu',
        label: 'Gujarati'
      }, {
        value: 'hi',
        label: 'Hindi'
      }, {
        value: 'hu',
        label: 'Hungarian'
      }, {
        value: 'is',
        label: 'Icelandic'
      }, {
        value: 'id',
        label: 'Indonesian'
      }, {
        value: 'it',
        label: 'Italian'
      }, {
        value: 'ja',
        label: 'Japanese'
      }, {
        value: 'kn',
        label: 'Kannada'
      }, {
        value: 'kk',
        label: 'Kazakh'
      }, {
        value: 'km',
        label: 'Khmer'
      }, {
        value: 'ko',
        label: 'Korean'
      }, {
        value: 'ky',
        label: 'Kyrgyz'
      }, {
        value: 'lo',
        label: 'Lao'
      }, {
        value: 'lv',
        label: 'Latvian'
      }, {
        value: 'lt',
        label: 'Lithuanian'
      }, {
        value: 'mk',
        label: 'Macedonian'
      }, {
        value: 'ms',
        label: 'Malay'
      }, {
        value: 'ml',
        label: 'Malayalam'
      }, {
        value: 'mr',
        label: 'Marathi'
      }, {
        value: 'mn',
        label: 'Mongolian'
      }, {
        value: 'ne',
        label: 'Nepali'
      }, {
        value: 'no',
        label: 'Norwegian'
      }, {
        value: 'pl',
        label: 'Polish'
      }, {
        value: 'pt',
        label: 'Portuguese'
      }, {
        value: 'pt-BR',
        label: 'Portuguese (Brazil)'
      }, {
        value: 'pt-PT',
        label: 'Portuguese (Portugal)'
      }, {
        value: 'pa',
        label: 'Punjabi'
      }, {
        value: 'ro',
        label: 'Romanian'
      }, {
        value: 'ru',
        label: 'Russian'
      }, {
        value: 'sr',
        label: 'Serbian'
      }, {
        value: 'ru',
        label: 'Sinhalese'
      }, {
        value: 'sk',
        label: 'Slovak'
      }, {
        value: 'sl',
        label: 'Slovenian'
      }, {
        value: 'es',
        label: 'Spanish'
      }, {
        value: 'es-419',
        label: 'Spanish (Latin America)'
      }, {
        value: 'sw',
        label: 'Swahili'
      }, {
        value: 'sv',
        label: 'Swedish'
      }, {
        value: 'ta',
        label: 'Tamil'
      }, {
        value: 'te',
        label: 'Telugu'
      }, {
        value: 'th',
        label: 'Thai'
      }, {
        value: 'tr',
        label: 'Turkish'
      }, {
        value: 'uk',
        label: 'Ukrainian'
      }, {
        value: 'ur',
        label: 'Urdu'
      }, {
        value: 'uz',
        label: 'Uzbek'
      }, {
        value: 'vi',
        label: 'Vietnamese'
      }, {
        value: 'zu',
        label: 'Zulu'
      }]
    },
    {
      name: 'types',
      label: 'Type',
      type: 'select',
      htmlHelp: '<a href="https://developers.google.com/places/web-service/autocomplete#place_types" target="_blank">More information here</a>',
      choices: [{
        value: '',
        label: '---'
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
        value: 'sublocality',
        label: 'Sub Locality'
      }, {
        value: 'postal_code',
        label: 'Postal Code'
      }, {
        value: 'country',
        label: 'Country'
      }, {
        value: 'administrative_area_level_1',
        label: 'Administrative Area Level 1'
      }, {
        value: 'administrative_area_level_2',
        label: 'Administrative Area Level 2'
      }, {
        value: 'administrative_area_level_3',
        label: 'Administrative Area Level 3'
      }]
    }
  ],
  arrangeFields: [
    {
      name: 'settings',
      label: 'Field settings',
      fields: [
        'fieldLabel',
        'fieldName',
        'required',
        'googleApiKey',
        'placeholder',
        'types',
        'language',
        'offset',
        'origin',
        'location',
        'radius',
        'strictBounds'
      ]
    }
  ]
}