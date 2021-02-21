let arena = {
  Arsenal: "Emirates Stadium",
  "Aston Villa": "Villa Park",
  Brighton: "American Express",
  Burnley: "Turf Moor",
  Chelsea: "Stamford Bridge",
  "Crystal Palace": "Selhurst Park",
  Everton: "Goodison Park",
  Fulham: "Craven Cottage",
  Leeds: "Elland Road",
  Leicester: "King Power",
  Liverpool: "Anfield",
  "Man City": "Eithad",
  "Man Utd": "Old Trafford",
  Newcastle: "St. James' Park",
  "Sheffield Utd": "Bramall Lane",
  Southampton: "St Mary",
  Spurs: "Tottenham Hotspur",
  "West Brom": "Albion Park",
  "West Ham": "London Stadium",
  Wolves: "Molineux Stadium",
};

let jersey = {
  Arsenal:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_3-66.webp",
  "Aston Villa":
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_7-66.webp",
  Brighton:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_36-66.webp",
  Burnley:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_90-66.webp",
  Chelsea:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_8-66.webp",
  "Crystal Palace":
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_31-66.webp",
  Everton:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_11-66.webp",
  Fulham:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_54-66.webp",
  Leeds:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_2-66.webp",
  Leicester:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_13-66.webp",
  Liverpool:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_14-66.webp",
  "Man City":
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp",
  "Man Utd":
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_1-66.webp",
  Newcastle:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_4-66.webp",
  "Sheffield Utd":
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_49-66.webp",
  Southampton:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_20-66.webp",
  Spurs:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_6-66.webp",
  "West Brom":
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_35-66.webp",
  "West Ham":
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_21-66.webp",
  Wolves:
    "https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_39-66.webp",
};

class Team {
  constructor(parsedJson) {
    (this.emblem = emblem[parsedJson["name"]]),
      (this.arena = arena[parsedJson["name"]]),
      (this.jersey = jersey[parsedJson["name"]]),
      (this.code = parsedJson["code"]),
      (this.draw = parsedJson["draw"]),
      (this.id = parsedJson["id"]),
      (this.loss = parsedJson["loss"]),
      (this.name = parsedJson["name"]),
      (this.short_name = parsedJson["short_name"]),
      (this.win = parsedJson["win"]);
  }
}

let teams = [];
export let teamsFromJson = (str) => {
  str.forEach((s) => {
    let team = new Team(s);
    teams.push(team);
  });
  return teams;
};
