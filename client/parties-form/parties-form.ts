import {Component, View} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Parties} from 'collections/parties';
import {MeteorComponent} from 'angular2-meteor';
import {AccountsUI} from 'meteor-accounts-ui'
import {InjectUser} from 'meteor-accounts';

@Component({
    selector: 'parties-form'
})

@View({
    templateUrl: './client/parties-form/parties-form.html'
})

@InjectUser()

export class PartiesForm extends MeteorComponent{
	partiesForm: ControlGroup;

	constructor() {
    super();
		var fb = new FormBuilder();

		this.partiesForm = fb.group({
			name: ['', Validators.required],
			description: [''],
			location: ['', Validators.required],
      public: [false]
		});
    console.log(this.user);
	}

	addParty(party: Party) {
		if (this.partiesForm.valid) {
      if (Meteor.userId()) {
		    Parties.insert({
				  name: party.name,
				  description: party.description,
				  location: party.location,
          public: party.public,
          owner: Meteor.userId()
			  });
      }
			(<Control>this.partiesForm.controls['name']).updateValue('');
      (<Control>this.partiesForm.controls['description']).updateValue('');
      (<Control>this.partiesForm.controls['location']).updateValue('');
      (<Control>this.partiesForm.controls['public']).updateValue(false);
		} else {
			console.log("Form not valid.");
		}
	}

}
