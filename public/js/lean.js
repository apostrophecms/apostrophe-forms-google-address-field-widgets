apos.utils.widgetPlayers['apostrophe-forms-google-address-field'] = function(el, widget, options) {
  var input = el.querySelector('input[name=' + widget.fieldName + ']');
  if (input && window.google) {
    new google.maps.places.Autocomplete(input); // eslint-disable-line no-new, no-undef
  }
};
