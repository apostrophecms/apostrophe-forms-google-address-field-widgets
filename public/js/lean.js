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
    return;
  }

  var scriptSrc = 'https://maps.googleapis.com/maps/api/js?key=' + googleApiKey + '&libraries=places';
  var alreadyLoaded = document.querySelector('script[src="' + scriptSrc + '"]');

  if (!alreadyLoaded) {
    var googleScript = document.createElement('script');
    googleScript.setAttribute('src', scriptSrc);
    googleScript.onload = googleScriptLoaded;
    document.head.appendChild(googleScript);
  }

  function googleScriptLoaded () {
    var input = el.querySelector('input[name=' + widget.fieldName + ']');
    var google = window.google;

    var countries = widget.countries.map(function (countryObject) {
      return countryObject.country;
    });

    var searchOptions = {
      componentRestrictions: { country: countries }
    };

    if (widget.types) {
      searchOptions.types = [ widget.types ];
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
    autocomplete.setFields([ 'address_component' ]);

    var addressParts = Object.keys(widget.addressParts || {});

    if (widget.splitAddress && addressParts.length) {
      var inputNames;

      autocomplete.addListener('place_changed', function () {
        inputNames = {};
        var place = autocomplete.getPlace();

        if (place.address_components) {
          for (var i = 0; i < addressParts.length; i++) {
            var element = el.querySelector('[data-apos-forms-input-' + addressParts[i] + ']');

            if (!element) {
              continue;
            }

            element.value = '';

            // Get each component of the address from the place details,
            // and then fill-in the corresponding field on the form.
            for (var j = 0; j < place.address_components.length; j++) {
              var addressType = place.address_components[j].types[0];
              if (addressParts[i] === addressType) {
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
  }
};
