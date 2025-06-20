function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number":0,
                    "shoe":16,
                    "points":22,
                    "rebounds":12,
                    "assists":12,
                    "steals":3,
                    "blocks":1,
                    "slamDUnks":1,
                },
                "Reggie Evans": {
                    "number":30,
                    "shoe":14,
                    "points":12,
                    "rebounds":12,
                    "assists":12,
                    "steals":12,
                    "blocks":12,
                    "slamDUnks":7,
                },
                "Brook Lopez": {
                    "number":11,
                    "shoe":17,
                    "points":17,
                    "rebounds":19,
                    "assists":30,
                    "steals":10,
                    "blocks":3,
                    "slamDUnks":15,
                },
                "Alan Anderson": {
                    "number":0,
                    "shoe":16,
                    "points":22,
                    "rebounds":12,
                    "assists":12,
                    "steals":3,
                    "blocks":1,
                    "slamDUnks":1,
                },
                "Mason Plumlee": {
                    "number":1,
                    "shoe":19,
                    "points":26,
                    "rebounds":12,
                    "assists":6,
                    "steals":3,
                    "blocks":8,
                    "slamDUnks":5,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number":4,
                    "shoe":18,
                    "points":10,
                    "rebounds":1,
                    "assists":1,
                    "steals":2,
                    "blocks":7,
                    "slamDUnks":2,
                },
                "Bismak Biyombo": {
                    "number":0,
                    "shoe":16,
                    "points":12,
                    "rebounds":4,
                    "assists":7,
                    "steals":7,
                    "blocks":15,
                    "slamDUnks":10,
                },
                "Desagna Diop": {
                    "number":2,
                    "shoe":14,
                    "points":24,
                    "rebounds":12,
                    "assists":12,
                    "steals":4,
                    "blocks":5,
                    "slamDUnks":5,
                },
                "Ben Gordon": {
                    "number":8,
                    "shoe":15,
                    "points":33,
                    "rebounds":3,
                    "assists":2,
                    "steals":1,
                    "blocks":1,
                    "slamDUnks":0,
                },
                "Brendan Haywood": {
                    "number":33,
                    "shoe":15,
                    "points":6,
                    "rebounds":12,
                    "assists":12,
                    "steals":22,
                    "blocks":5,
                    "slamDUnks":12,
                }

            }
        }
    };
}
console.log(gameObject());

function numPointsScored (PlayersName) {
let game=gameObject();

for(let teamKey in game){
    let team=game[teamKey];
    if(team.players &&team.players[PlayersName]) {
    return team.players[PlayersName.points];
    }
}
return undefined;
}

function shoeSize (PlayersName) {
let game= gameObject();

for(let teamKey in game) {
    let team=game[teamKey];
    if(team.players && team.players[PlayersName]) {
    return team.players[PlayersName].shoe;
    
    }
}
return undefined;

}

function teamColors (teamName){
let game=gameObject();
console.log("Game object:",game);
for(let teamKey in game) {
    let team=game[teamKey];
console.log("checking team:", team.teamName)
    
    if(team.teamName===teamName){
    return team.colors
    }
    debugger
    }
}

function teamNames() {
    let game=gameObject();
    for(let teamKey in game) {
    let team=game[teamKey];
    names.push(team.teamName);
    }
    return names
    console.log(names)
}

function playerNumbers (teamName) {
    let game=gameObject();
    for(let numberKey in game) {
        let team=game[numberKey];
        
        if(team.teamName===teamName){
        let  numbers =[];
        for(let playerName in game){
            let player=team.players[playerName];
            numbers.push[player.Number]
        }
        }
    }
}

function playerStats(playersName) {
    let game=gameObject();
    for(let teamKey in game){
        let team=game[teamKey];
    for( let playerName in team.player) {
        if (playerName===playersName)
            return team.players[playerName]
    }
    }
}

function bigshoeRebounds () {
    let game=gameObject();
    let biggestShoeSize=0;
    let playerWithBiggestShoes=null;

    for(let teamKey in game);{

    let team= game[teamKey];
    for(let playerName in team.player) {
        let player=team.player[playerName];
        if (player.shoe>biggestShoeSize) {
            biggestShoeSize=player.shoe
            playerWithBiggestShoes=player
        }
    }
    }
    debugger
//    console.log (playerWithBiggestShoes.rebounds);
    return playerWithBiggestShoes.rebounds
        

}

function mostPointsScored () {
let game=gameObject();
let mostPointsScored=0;
for(let teamKey in game){
    let team=game[teamKey];
    for(let playerName in team.players) {
        let player=team.players[playerName];
        if (player.points>mostPointsScored){
            mostPointsScored=player.points
        }
    }
}
return mostPointsScored;
}

function winningTeam() {
    let game=gameObject();
    let teamsPoints=0;
    let mostPoints=0
    for(let teamKey in game) {
        let team=game[teamKey];
        if(team.points>mostPoints){
        mostPoints=team.points
        }
    }
    return mostPoints;
}

function playerWithLongestName() {
let game=gameObject();
let longestNameLength=0;
let longestPlayerName="";
for(let teamKey in game){
    let team=game[teamKey];
    for(let playerName in team.players) {
        let player=team.players[playerName];
        if (player.name.length>longestNameLength){
            longestNameLength=player.name.length
            longestPlayerName=player.name;
        }
    }
}
return longestPlayerName();
}