import {RemoteService} from './services/remote-services.js';

new RemoteService().fetchGameweekEvents().then(data => console.log(data));