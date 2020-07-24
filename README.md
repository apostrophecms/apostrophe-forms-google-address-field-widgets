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
  'apostrophe-forms-google-address-field-widgets': {
    googleApiKey: 'validGoogleApiKeyHere' // mandatory
  }
}
```

The user will need a valid Google API key for the suggestions displayed by Google to work as stated in Google Maps Platform documentation: [https://developers.google.com/maps/documentation/javascript/places-autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete). You must connect a billing account to the Google API console project.

Default rendering:

![](./assets/basic.gif)

When submitted, the form's output will contain the input's name and value.
For example, if the input's name is `address`, the above example would output:

```js
{
  address: 'Tour Eiffel, Avenue Anatole France, Paris, France'
}
```


## Advanced settings

The number of results can be restricted
- to a type (addresses, regions, establishments, ...)
- to a certain area with coordinates
- to countries (5 at max due to Google policy)

The address can also be split into multiple fields, as allowed by Google. The current list of choices is the following:

![](./assets/splitaddress.png)

Any number of fields can be added and the fields' order can be rearranged.

Rendering example of the above configuration:

![](./assets/split.gif)

When submitted, the form's output will contain the fields names and values (not the input's name).
For example, the above example would output:

```js
{
  street_number: '5',
  route: 'Avenue Anatole France',
  locality: 'Paris',
  postal_code: '75007',
  administrative_area_level_1: 'Île-de-France',
  country: 'France'
}
```

The object's keys come from the package configuration and are the same as Google.


