console.log('Advanced debugging example running.')
//debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

function numPointsScored(name) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    const player = team.players?.[name];
    if (player) return player.points;
  }
}

function shoeSize(name) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    const player = team.players?.[name];
    if (player) return player.shoe;
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) return team.colors;
  }
}

function teamNames() {
  const game = gameObject();
  const names = []
  for (let teamKey in game) {
    const teamName = game[teamKey].teamName;
    names.push(teamName)

  }
  return names;
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      const players = team.players;
      const names = Object.keys(players);
      return names.map(name => players[name].number);
    }
  }
}

function playerStats(name) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    const player = team.players?.[name];
    if (player) return player;
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let bigFoot = [0, {}]
  for (let teamKey in game) {
    const team = game[teamKey];
    for (let playerName in team.players) {
      const player = team.players[playerName]
      if (parseInt(player.shoe) > bigFoot[0]) {
        bigFoot[0] = parseInt(player.shoe);
        bigFoot[1] = player;
      }
    }
  }
  return bigFoot[1].rebounds;
}

function mostPoints() {
  const game = gameObject();
  let most = [0, '']
  for (let teamKey in game) {
    const team = game[teamKey];
    for (let playerName in team.players) {
      const player = team.players[playerName]
      if (parseInt(player.points) > most[0]) {
        most[0] = parseInt(player.points);
        most[1] = `${playerName}`;
      }
    }
  }
  return most[1];
}

function winningTeam() {
  const game = gameObject();
  const homePoints = Object.keys(game.home.players).reduce((acc, name) => parseInt(game.home.players[name].points) + acc, 0)
  const awayPoints = Object.keys(game.away.players).reduce((acc, name) => parseInt(game.away.players[name].points) + acc, 0)
  console.log(homePoints, awayPoints)
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName
}

function longestName() {
  const game = gameObject();
  let bigName = [0, '']
  for (let teamKey in game) {
    const team = game[teamKey];
    for (let playerName in team.players) {
      console.log(playerName, playerName.length)
      if (playerName.length > bigName[0]) {
        bigName[0] = playerName.length;
        bigName[1] = playerName;
      }
    }
  }
  return bigName[1];
}

function mostSteals() {
  const game = gameObject();
  let most = [0, '']
  for (let teamKey in game) {
    const team = game[teamKey];
    for (let playerName in team.players) {
      const player = team.players[playerName]
      if (parseInt(player.steals) > most[0]) {
        most[0] = parseInt(player.steals);
        most[1] = `${playerName}`;
      }
    }
  }
  return most[1];
}

function doesLongNameStealATon() {
  return mostSteals() === longestName();
}

// then, call the function so it runs!
//goodPractices()
console.log(longestName("Alan Anderson") === mostSteals())
