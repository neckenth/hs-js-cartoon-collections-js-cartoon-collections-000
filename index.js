function dwarfRollCall(dwarves) {
    var roll = []
    for (let i=0; i<dwarves.length; i++) {
        roll.push(`${i + 1}. ${dwarves[i]} `)
    }
    return roll.join('')
}

function summonCaptainPlanet(planeteerCalls){
    var calls = []
    for (let i=0; i<planeteerCalls.length; i++) {
        calls.push(`${planeteerCalls.uppercase}!`)
    }
    return calls
}

function longPlaneteerCalls(words) {
    for (let i=0; i<words.length; i++){
        if (words[i].length > 4) {
            return true
        }
    }
    return false
}

function findTheCheese (foods) {
    var cheeses = ['cheddar', 'gouda', 'camembert']
    for (let i=0; i < foods.length; i++) {
        if (cheeses.indexOf(foods[i]) != -1) {
            return foods[i]
        }
    }
    return (`no cheese!`)
}
