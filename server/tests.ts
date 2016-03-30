import {Tests} from '../collections/tests';

Meteor.publish('tests', function() {
  return Tests.find({}, {sort: {name: 1}});
} )

Meteor.publish('test', function(testName: string) {
  return Tests.find({name: testName});
})
