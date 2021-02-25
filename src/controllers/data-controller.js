import {RemoteService} from '../services/remote-services.js';

export class DataController{
    // Controller for fetching gameweek events
    async fetchGameweekEvents(){
        try{
            let gameevents = await new RemoteService().fetchGameweekEvents();
            if(gameevents != null){
                return gameevents;
            }
        }catch(e){
        }
    }

    async fetchElements(){
        try{
            let elements = await new RemoteService().fetchElements();
            if(elements != null){
                return elements;
            }
        }catch(e){
        }
    }

    async fetchFixtures(){
        try{
            let fixtures = await new RemoteService().fetchFixtures();
            if(fixtures != null){
                return fixtures;
            }
        }catch(e){
        }
    }

    async fetchTeams(){
        try{
            let teams = await new RemoteService().fetchTeams();
            if(teams != null){
                return teams;
            }
        }catch(e){
        }
    }
}

