apos.utils.widgetPlayers['apostrophe-forms-google-address-field'] = function(el, widget, options) {
  var formsWidget = apos.utils.closest(el, '[data-apos-widget="apostrophe-forms"]');
  if (!formsWidget) {
    // Editing the form in the piece modal, it is not active for submissions
    return;
  }

  var googleApiKey = el.querySelector('[data-apos-forms-google-api-key]').dataset.aposFormsGoogleApiKey;
  if (!googleApiKey) {
    // eslint-disable-next-line no-console
    console.error('apostrophe-forms-google-address-field-widgets error: missing Google API key');
  }

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

    if (widget.splitAddress && widget.addressParts && widget.addressParts.length) {
      var inputNames;

      autocomplete.addListener('place_changed', function () {
        inputNames = {};
        var split = widget.addressParts;
        var place = autocomplete.getPlace();

        if (place.address_components) {
          for (var i = 0; i < split.length; i++) {
            var element = el.querySelector('[data-apos-forms-input-' + split[i] + ']');
            element.value = '';

            // Get each component of the address from the place details,
            // and then fill-in the corresponding field on the form.
            for (var j = 0; j < place.address_components.length; j++) {
              var addressType = place.address_components[j].types[0];
              if (split[i] === addressType) {
                element.value = place.address_components[j].long_name;
                var name = element.getAttribute('name');
                inputNames[name] = element.value;
                break;
              }
            }
          }
        }
      });

      formsWidget.addEventListener('apos-forms-validate', function(event) {
        for (var key in inputNames) {
          var addressPartInput = el.querySelector('input[name=' + key + ']');
          event.input[key] = addressPartInput.value;
        }
      });
    }

    var inputName = input.getAttribute('name');
    formsWidget.addEventListener('apos-forms-validate', function(event) {
      event.input[inputName] = input.value;
    });
  });
};
