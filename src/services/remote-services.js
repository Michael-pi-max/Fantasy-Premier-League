import {eventFromJson} from '../models/Event.js';

export class RemoteService{
    //Return the gameweek events mapping each gameweek to our own Gameweek Object
    async fetchGameweekEvents(){
        const uri = `https://greenethiopia.net/api/v1/fpl`;
        let response = await fetch(uri);
        let res = await response.json();
        if(response.status === 200){
            let data = res["obj"]["events"]
            return eventFromJson(data);
        }else{
            data = 'Please, Try Again'
        }
    }
}


















// const baseURL = 'https://greenethiopia.net/api/v1/fpl';
// export const reqType = {
//     bootstrap : '',
    // element : 'element-summary/',
    // events: 'events',
    // event: 'event',
    // entry: 'entry',
    // elementTypes: 'element-types',
    // gameweekFixtures: 'fixtures/?event',
    // teams: 'teams/',
    // leagueClassicStanding: 'leagues-classic'
//}
// const makeRequest = async (url, param) => {
//     const response = await fetch(`${baseURL}${url}`);
//     const res = await response.json();
//     let data;
//     if(response.status === 200){
//         data = res['obj'];
//     }
//     return data;
// }
// // Get Overall Gameweek Information Data
// export const getBootstrap = async () => {
//       const data = makeRequest(reqType.bootstrap);
//       return data;
// }


