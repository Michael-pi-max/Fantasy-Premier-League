import {RemoteService} from '../services/remote-services.js';
const nextgameweek = document.getElementById("nextgameweek");

export class DataController{

    constructor(){
        // Pagination controller
        this.gameweekpage = 0;
        this.gameweekEventList = [];
        this.elementList = [];
        this.fixturesList = [];
        this.teamsList = [];
    }

    manageNextGameweek = () => {
        if(this.gameweekpage === 37){
            nextgameweek.style.display = 'none';
        }else{
            this.gameweekpage += 1;
        }
    }

    async fetchAll(){
        return [
            this.fetchGameweekEvents(),
            this.fetchFixtures(),
            this.fetchElements(),
            this.fetchTeams()
            ]
        }
    
    
    // Controller for fetching gameweek events
    async fetchGameweekEvents(){
        try{
            this.gameweekEventList = await new RemoteService().fetchGameweekEvents();
            if(this.gameweekEventList != null){
                return this.gameweekEventList;
            }
        }catch(e){
        }
    }

    async fetchElements(){
        try{
            this.elementList = await new RemoteService().fetchElements();
            if(this.elementList != null){
                return this.elementList;
            }
        }catch(e){
        }
    }

    async fetchFixtures(){
        try{
            this.fixturesList = await new RemoteService().fetchFixtures();
            if(this.fixturesList != null){
                return this.fixturesList;
            }
        }catch(e){
        }
    }

    async fetchTeams(){
        try{
            this.teamsList = await new RemoteService().fetchTeams();
            if(this.teamsList != null){
                return this.teamsList;
            }
        }catch(e){
        }
    }
}

export let dataController = new DataController();

