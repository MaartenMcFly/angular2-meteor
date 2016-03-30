import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Measurements} from 'collections/measurements';
import {MeteorComponent} from 'angular2-meteor';
import {ChartDirective} from '../chart.directive';

@Component({
  selector: 'test-details',
  directives: [ChartDirective]
})

@View({
  templateUrl: '/client/test-details/test-details.html',
  directives: [ROUTER_DIRECTIVES]
})

export class TestDetails extends MeteorComponent {

  measurements: Mongo.Cursor<Measurement>;

	constructor(params: RouteParams) {
    super();
		var testName = params.get('testName');
    console.log(testName);

    this.subscribe('measurements', testName, () => {
      this.measurements = Measurements.find({testName: testName});
    }, true);
	}
}
