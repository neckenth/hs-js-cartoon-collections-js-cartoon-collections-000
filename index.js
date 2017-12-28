function dwarfRollCall(dwarves) {
<<<<<<< HEAD
    var roll = []
    for (let i=0; i<dwarves.length; i++) {
        roll.push(`${i + 1}. ${dwarves[i]} `)
    }
    return roll.join('')
=======
    var l = []
    for (let i=0; i<dwarves.length; i++) {
        l.push('${i + 1}. ${dwarves[i]}')
    }
    return l
>>>>>>> 19b037cfea81d3257c96fab0357e895f5e1c2db9
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
