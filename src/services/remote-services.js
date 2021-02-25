
export class RemoteService{
    async fetchGameweekEvents(){
        const uri = `https://fantasy.premierleague.com/api/bootstrap-static/`;
        let response = await fetch(uri);
        console.log(response)
        if(response.status === 200){
            let jsonString = response.body;
            let map = JSON.parse(jsonString);
            let data = map["events"]
            console.log(data);
        }
    }
}