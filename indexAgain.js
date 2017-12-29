function dwarfRollCall(dwarves) {
    var dwarfList = []
    for (var i = 0; i < dwarves.length; i++) {
        dwarfList.push(`${i + 1}. ${dwarves[i]}`)
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

// how many have more than 4
// how do we know if there are more than 2
// how do we optimize that

function longPlaneteerCallsDiff(calls) {
    callsCounter = 0
    for (var i = 0; i < calls.length; i++) {
        if (calls[i].length > 4) {
            callsCounter++
        }
    }
    return callsCounter
}

function longPlaneteerCallsDiffDiff(calls) {
    callsCounter = 0
    for (var i = 0; i < calls.length; i++) {
        if (calls[i].length > 4) {
            callsCounter++
        }
    }
    if (callsCounter >= 2) {
        return true
    }
}

function longPlaneteerCallsDiffDiffDiff(calls) {
    callsCounter = 0
    for (var i = 0; i < calls.length; i++) {
        if (calls[i].length > 4) {
            callsCounter++
        }
    }
    return callsCounter >= 2
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
