import {Measurements} from '../collections/measurements';

Meteor.publish('measurements', function(name: string) {
  console.log("Name is " + name);
  var result = Measurements.find({testName: name});
  console.log(result.count());
  return result;
} )

//Meteor.publish('measurements', function() {
//  return Measurements.find();
//} )
