import {Component, View, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {PartiesList} from 'client/parties-list/parties-list';
import {TestsList} from 'client/tests-list/tests-list';
import {PartyDetails} from 'client/party-details/party-details';
import {TestDetails} from 'client/test-details/test-details';

@Component({
    selector: 'app'
})

@View({
    template: '<router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/', as: 'PartiesList', component: PartiesList},
  {path: '/tests', as: 'TestsList', component: TestsList},
  {path: '/tests/:testName', as: 'TestDetails', component: TestDetails},
	{path:'/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])

class Socially { }

bootstrap(Socially, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);
