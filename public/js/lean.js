apos.utils.widgetPlayers['apostrophe-forms-google-address-field'] = function(el, widget, options) {
  var googleApiKey = el.querySelector('[data-apos-forms-google-api-key]').dataset.aposFormsGoogleApiKey;
  if (googleApiKey) {
    var scriptSrc = 'https://maps.googleapis.com/maps/api/js?key=' + googleApiKey + '&libraries=places';
    var alreadyLoaded = document.querySelector('script[src="' + scriptSrc + '"]');
    if (!alreadyLoaded) {
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

      var autocomplete = new google.maps.places.Autocomplete(input, searchOptions); // eslint-disable-line no-new
      autocomplete.setFields(['address_component']);

      if (widget.splitAddress) {
        autocomplete.addListener('place_changed', function () {
          var split = widget.splitAddress;
          var place = autocomplete.getPlace();

          if (place.address_components) {
            for (var i = 0; i < split.length; i++) {
              var element = el.querySelector('.apos-forms-input-' + split[i]);
              element.value = '';

              // Get each component of the address from the place details,
              // and then fill-in the corresponding field on the form.
              for (var j = 0; j < place.address_components.length; j++) {
                var addressType = place.address_components[j].types[0];
                if (split[i] === addressType) {
                  element.value = place.address_components[j].long_name;
                  break;
                }
              }
            }
          }
        });
      }
    });
  } else {
    // eslint-disable-next-line no-console
    console.error('apostrophe-forms-google-address-field-widgets error: missing Google API key');
  }
};
