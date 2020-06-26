apos.utils.widgetPlayers['apostrophe-forms-google-address-field'] = function(el, widget, options) {
  var scriptSrc = 'https://maps.googleapis.com/maps/api/js?key=' + widget.googleApiKey + '&libraries=places';
  var alreadyLoaded = document.querySelector('script[src="' + scriptSrc + '"]');
  if (!alreadyLoaded && widget.googleApiKey) {
    var googleScript = document.createElement('script');
    googleScript.setAttribute('src', scriptSrc);
    document.head.appendChild(googleScript);
  }

  var input = el.querySelector('input[name=' + widget.fieldName + ']');
  input.addEventListener('input', function () {
    var google = window.google;

    var countries = _.map(widget.countries, function (countryObject) {
      return countryObject.country;
    });

    var searchOptions = {
      componentRestrictions: { country: countries }
    };

    if (widget.types) {
      searchOptions.types = [widget.types];
    }
    if (widget.origin) {
      searchOptions.origin = new google.maps.LatLng(widget.originLatitude, widget.originLongitude);
    }
    if (widget.bounds) {
      searchOptions.bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(widget.northEastLatitude, widget.northEastLongitude),
        new google.maps.LatLng(widget.southWestLatitude, widget.southWestLongitude)
      );

      if (widget.strictBounds) {
        searchOptions.strictBounds = true;
      }
    }

    new google.maps.places.Autocomplete(input, searchOptions); // eslint-disable-line no-new
  });
};
