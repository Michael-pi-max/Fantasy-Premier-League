import {DataController} from './controllers/data-controller.js';

//getting ids
const gameweekName = document.querySelector('.gameweektitle');
const gameweekTime = document.querySelector('.gameweektime');
const averageScore = document.querySelector('.averagepoint');
const highestScore = document.querySelector('.highestpoint');

//getting lists
let gameweekEventList = [];
let elementList = [];
let fixturesList = [];
let teamsList = [];
//Ultimate data controller
let dataController = new DataController();

//Data Related To Gameweek Event
dataController.fetchGameweekEvents().then(data => {
    gameweekEventList = data;
    // Gameweek 1 is at index 0 -> Applies for all
    gameweekName.textContent = gameweekEventList[0].name;
    gameweekTime.textContent = new Date(gameweekEventList[0].deadline_time).toDateString();
    averageScore.textContent = gameweekEventList[0].average_entry_score;
    highestScore.textContent = gameweekEventList[0].highest_score;
});


//Data Related To Element - Player
dataController.fetchElements().then(data => {
    elementList = data;
})

//Data Related To fixtures
dataController.fetchFixtures().then(data => {
    fixturesList = data;
})

// Data Related to Teams
dataController.fetchTeams().then(data=>{
    teamsList = data;
    console.log(teamsList)
})