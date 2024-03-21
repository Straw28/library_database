const members = require('../data/members')

function addMember(){
    return new Promise((resolve, reject) => {
        resolve(members)
    })
}

module.exports = {
    addMember
}