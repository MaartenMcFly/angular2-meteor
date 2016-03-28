import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Parties} from 'collections/parties';
 
@Component({
  selector: 'party-details'
})
@View({
  templateUrl: '/client/party-details/party-details.html',
  directives: [ROUTER_DIRECTIVES]
})
export class PartyDetails {
	party: Object;

	constructor(params: RouteParams) {
		var partyId = params.get('partyId');
		this.party = Parties.findOne(partyId);
	}
}
