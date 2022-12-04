const normalizeCompanyName = (companyName) => {
    if (companyName == undefined) {
        return undefined
    }
    spaceSplit = companyName.split(" ").map(word => {
        return word.toLowerCase()
    })

    spaceSplit = spaceSplit.map(word => {
        if (word == '&') {
            return 'and'
        }
        if (word == 'ent') {
            return 'enterprises'
        }
        if (word == 'co') {
            return 'company'
        }
        return word
    })

    lastWord = spaceSplit[spaceSplit.length - 1]
    lastWord = lastWord.trim()
    if (lastWord[lastWord.length - 1] == '.') {
        lastWord = lastWord.slice(0, -1)
    }
    spaceSplit[spaceSplit.length - 1] = lastWord

    dotSplit = spaceSplit[spaceSplit.length - 1].split(".")
    spaceSplit[spaceSplit.length - 1] = dotSplit.map(word => {
        if (word == "ltd") {
            return "limited"
        }
        return word
    }).join(".")
    return spaceSplit.join(" ").trim()
}

module.exports = { normalizeCompanyName }