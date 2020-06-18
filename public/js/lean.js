apos.utils.widgetPlayers['apostrophe-forms-google-address-field'] = function(el, widget, options) {
  var input = el.querySelector('input[name=' + widget.fieldName + ']');
  new google.maps.places.Autocomplete(input);
};
