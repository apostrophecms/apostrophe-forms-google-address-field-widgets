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
        'placeholder'
      ]
    }
  ]
}