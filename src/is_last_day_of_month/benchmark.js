// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isLastDayOfMonth = require('./')

suite('isLastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return isLastDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
