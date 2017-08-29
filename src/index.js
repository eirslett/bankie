const handlers = {
  NO: require('./norwegian')
}

module.exports.getRequiredFields = function (countryCode) {
  if (handlers.hasOwnProperty(countryCode)) {
    return handlers[countryCode].requiredFields
  } else {
    return {
      error: 'Unknown country code ' + countryCode
    }
  }
}

module.exports.getData = function (params) {
  if (handlers.hasOwnProperty(params.countryCode)) {
    return handlers[params.countryCode].getData(params)
  } else {
    return {
      error: 'Unknown country code ' + params.countryCode
    }
  }
}
