// run in terminal with 'node playground/moment.js'

var moment = require('moment');

console.log(moment().format());

// timestamp
// January 1st 1970 @ 12:00am --> 0
// January 1st 1970 @ 12:01am --> 60

var now = moment();

console.log('Current timestamp: ', now.unix());

var timestamp = 1468944392;

var currentMoment = moment.unix(timestamp);

console.log('Current Moment: ', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('Current Moment: ', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
