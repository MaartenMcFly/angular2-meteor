import {loadParties} from './load-parties';
import './parties';
import './tests'
import './measurements'

Meteor.startup(loadParties);
