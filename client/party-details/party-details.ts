import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Parties} from 'collections/parties';
import {MeteorComponent} from 'angular2-meteor';

@Component({
  selector: 'party-details'
})
@View({
  templateUrl: '/client/party-details/party-details.html',
  directives: [ROUTER_DIRECTIVES]
})

export class PartyDetails extends MeteorComponent {
	party: Party;

	constructor(params: RouteParams) {
    super();
		var partyId = params.get('partyId');
    console.log(partyId);
		this.subscribe('party', partyId, () => {
      this.party = Parties.findOne(partyId);
    }, true);
	}

	saveParty(party: Party) {
    if (Meteor.userId()) {
  		Parties.update(party._id, {
  			$set: {
  				name: party.name,
  				description: party.description,
  				location: party.location
  			}
  		});
    } else {
      alert('Please log in to change this party');
    }
	}
}
