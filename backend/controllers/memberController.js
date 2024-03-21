const Member = require('../data/members')

async function getAllMembers(req, res){
    try{
        const members = await Member.findAll()

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))
    } catch(error){
        console.log(error)
    }
}

export default getAllMembers;