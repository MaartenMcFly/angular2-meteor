import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Measurements} from 'collections/measurements';
import {MeteorComponent} from 'angular2-meteor';
import {ChartDirective} from '../chart.directive';

@Component({
  selector: 'test-details'//,
  //directives: [ChartDirective, ROUTER_DIRECTIVES],
  //templateUrl: '/client/test-details/test-details.html',
})

@View({
  templateUrl: '/client/test-details/test-details.html',
  directives: [ROUTER_DIRECTIVES, ChartDirective]
})

export class TestDetails extends MeteorComponent {

  measurements: Mongo.Cursor<Measurement>;
  private lineChartData: Array<any> = [[]];
  private lineChartLabels: Array<any> = [];
  private lineChartType: string = 'Line';
	private lineChartOptions:any = {
		animation: false,
		scaleShowGridLines: false,
		pointDot: false,
		showScale: false,
		showTooltips: false
	};

	constructor(params: RouteParams) {
    super();
		var testName = params.get('testName');
    var canvas = document.getElementsByTagName("div");

    this.subscribe('measurements', testName, () => {
      this.measurements = Measurements.find({testName: testName});
      this.lineChartData[0] = this.measurements.fetch().map(function (m) {return m.testDuration});
      this.lineChartLabels = this.measurements.fetch().map(function (m) {return m.testTimestamp});
      console.log("Number: " + this.lineChartData[0].length);
    }, true);
	}
}
