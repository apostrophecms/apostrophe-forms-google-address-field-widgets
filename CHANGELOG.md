# Versions

## 4.1.0

### Adds

- Adds conditional field `isRequired` to splitted address parts. Adds a new data attribute on the input when required.

## 4.0.0 (2021-08-02)

### Breaks

- Uses `self.load` instead of `beforeSend` to set the API key.

### Fixes
- Fixes large amount of google requests when typing an address

### Adds

- Allows to set splitted address parts fields editable or disabled

## 3.0.1 (2021-06-30)

- Fixes address parts inputs not auto filled

## 3.0.0 (2021-06-07)

- Adds labels to splitted address fields

## 2.0.1 (2021-02-17)

- Fixed a wrong dependency to lodash

## 2.0.0 (2020-08-12)

- Replace schema field "googleApiKey" by project-level option "googleApiKey"
- New schema field "splitAddress" to split an address into pre-defined fields (street address, city, country, ...)

## 1.0.0

First version with advanced options from Google Maps API documentation
