function dwarfRollCall(dwarves) {
    var dwarfList = []
    for (var i = 0; i < dwarves.length; i++) {
        dwarfList.push(`${i + 1}. ${dwarves[i]} `)
    }
    return dwarfList.join('')
}

function summonCaptainPlanet(calls) {
    var newCalls = []
    for (var i = 0; i < calls.length; i++) {
        newCalls.push(`${calls[i].toUpperCase()}!`)
    }
    return newCalls
}

function longPlaneteerCalls(calls) {
    for (var i = 0; i < calls.length; i++) {
        if (calls[i].length > 4) {
            return true
        }
    }
    return false
}

function findTheCheese(arr) {
    var cheeses = ['cheddar', 'gouda', 'camembert']
    for (var i = 0; i < arr.length; i++) {
        if (cheeses.indexOf(arr[i]) > -1) {
            return arr[i]
        }
    }
    return `no cheese!`
}
