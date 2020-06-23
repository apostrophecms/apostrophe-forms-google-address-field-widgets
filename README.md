This module adds a Google-based input field validating addresses. It is meant for use alongside the `apostrophe-forms` module.

When using it, you must configure the `formWidgets` option to `apostrophe-forms` to include it, as well as all other form widgets you wish to use. See the `apostrophe-forms` documentation.

## Configuration

```javascript
// in app.js
modules: {
  'apostrophe-forms': {
    formWidgets: {
      // other fields go here
      'apostrophe-forms-google-address-field': {}
    }
  },
  'apostrophe-forms-widgets': {},
  'apostrophe-forms-google-address-field-widgets'
}
```

The user will need a valid Google API key for the suggestions displayed by Google to work.
