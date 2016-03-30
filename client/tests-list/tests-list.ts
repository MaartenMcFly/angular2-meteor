import {Component, View} from 'angular2/core';
import {Tests} from 'collections/tests';
import {RouterLink} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'tests-list'
})
@View({
    templateUrl: '/client/tests-list/tests-list.html',
    directives: [RouterLink, AccountsUI]
})
export class TestsList extends MeteorComponent{
    tests: Mongo.Cursor<Test>;

    constructor() {
        super();
        this.subscribe('tests', () => {
          this.tests = Tests.find();
        }, true);
    }

}
