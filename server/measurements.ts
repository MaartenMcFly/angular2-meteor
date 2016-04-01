import {Measurements} from '../collections/measurements';

Meteor.publish('measurements', function(name: string) {
  console.log("Name is " + name);
  var lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  console.log(lastWeek);
  var result = Measurements.find({testName: name, testTimestamp: {$gte: lastWeek}});
  console.log(result.count());
  return result;
} )
