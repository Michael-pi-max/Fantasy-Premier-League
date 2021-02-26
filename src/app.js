import {dataController} from './controllers/data-controller.js';

//getting ids
const gameweekName = document.querySelector('.gameweektitle');
const gameweekTime = document.querySelector('.gameweektime');
const averageScore = document.querySelector('.averagepoint');
const highestScore = document.querySelector('.highestpoint');

// Fixture Related
const gameweekFixtures = document.getElementById('fixtures');

//basic gameweek information
const mosttransferredin = document.querySelector('.mosttransferredin');
const mosttransferredinplayer = document.querySelector('.mosttransferredinplayer');
const mostcaptainedin = document.querySelector('.mostcaptainedin');
const mostcaptainedinplayer = document.querySelector('.mostcaptainedinplayer');

// Star Player
const starplayertitle = document.querySelector('.starplayertitle');
const starplayerjersey = document.querySelector('.starplayerjersey');
const starplayerfirstname = document.querySelector('.starplayerfirstname');
const starplayerlastname = document.querySelector('.starplayerlastname');
const starplayerteam = document.querySelector('.starplayerteam');
const starplayerpoints = document.querySelector('.starplayerpoints');

const prevview = document.querySelector('#prevview')
const nextview = document.querySelector('#nextview')


const nextgameweek = document.getElementById("nextgameweek");

const urlParams = new URLSearchParams(window.location.search);
let page = Number(urlParams.get("page"));
let prev;
let next;

if (Number(urlParams.get("page"))) {
    page = Number(urlParams.get("page"));
} else {
page = 1;
}

if (page >= 1) {
prev = `<a href="/user.html?page=${
    page - 1
}>Prev </a>`;
}
if (page < 37) {
next = `<a href="/user.html?page=${
    page + 1
}>Next</a>`;
}

let limit = 10;
let offset = (page-1) *limit
console.log(prev);
prevview.innerHTML = prev
nextview.innerHTML = next

//Ultimate data controller

let view = async function(){
    let overallData = await dataController.fetchAll();
    let events = await (await overallData[0]);
    let elements = await overallData[2];
    let fixtures = await overallData[1];
    let teams = await overallData[3];

    //Gameweek 1 is at index 0 -> Applies for all
    gameweekName.textContent = events[dataController.gameweekpage].name;
    gameweekTime.textContent = new Date(events[dataController.gameweekpage].deadline_time).toDateString();
    averageScore.textContent = events[dataController.gameweekpage].average_entry_score;
    highestScore.textContent = events[dataController.gameweekpage].highest_score;

    //TODO
    mosttransferredin.textContent = elements[events[dataController.gameweekpage].most_transferred_in].first_name + ' ' +  elements[events[dataController.gameweekpage].top_element].second_name;
    mosttransferredinplayer.innerHTML = `<img src=${teams[elements[events[dataController.gameweekpage].most_transferred_in].team].jersey}>`
    mostcaptainedin.textContent = elements[events[dataController.gameweekpage].most_captained].first_name + ' ' + elements[events[dataController.gameweekpage].most_captained].second_name;
    mostcaptainedinplayer.innerHTML = `<img src=${teams[elements[events[dataController.gameweekpage].most_captained].team].jersey}>`

    // Starplayer 
    starplayertitle.textContent = `GW ${events[5].id} star player`;
    starplayerjersey.innerHTML = `<img src=${teams[elements[events[dataController.gameweekpage].top_element].team].jersey}>`;
    starplayerfirstname.textContent = elements[events[dataController.gameweekpage].top_element].first_name;
    starplayerlastname.textContent = elements[events[dataController.gameweekpage].top_element].second_name;
    starplayerteam.textContent = '⚪ ' + teams[elements[events[dataController.gameweekpage].top_element].team - 1].name;     
    starplayerpoints.textContent = events[dataController.gameweekpage].top_element_info.points + ' ' + 'points';  

    // manage next 
    // nextgameweek.addEventListener('click', () => {
    //     dataController.manageNextGameweek();
    //     console.log(dataController.gameweekpage)
    // });

    let homeDiv = '';
    for(let i = 0; i <= 9; i++){
        homeDiv += `<div class="row mt-4">
            <div class="col-sm-12 fixturebox py-3">
                <div class="row mt-2">
                    <div class="col-sm-2 hometeam">
                        <img src=${teams[fixtures[i].team_h - 1].emblem}>
                    </div>
                    <div class="col-sm-2 versus text-center py-2">
                        ${fixtures[i].team_a_score !== null && fixtures[i].team_h_score !== null ? fixtures[i].team_h_score + '-' + fixtures[i].team_a_score: 'V'}
                    </div>
                    <div class="col-sm-2 awayteam">
                        <img src=${teams[fixtures[i].team_a - 1].emblem}>
                    </div>
                    <div class="col-sm-5 fixtureplacetime">
                        <div class="row">
                            <div class="col-sm-12 fixturetime">${new Date(fixtures[i].kickoff_time).getHours() +':'+ new Date(fixtures[i].kickoff_time).getMinutes()}</div>
                            <div class="col-sm-12 fixtureplace text-muted">${teams[fixtures[i].team_h - 1].arena}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }
    gameweekFixtures.innerHTML = homeDiv
                       
    // awayTeam.innerHTML = `<img src=${teams[fixtures[129].team_a - 1].emblem}>`;
    // homeTeam.innerHTML = `<img src=${teams[fixtures[129].team_h - 1].emblem}>`
    console.log(events);
    // // console.log(teams);
    
    
}

view()


    
