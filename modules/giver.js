const {db} = require('../config/db.js');


const id2NameGiver = (pid)  => {
    return db('giver')
    .select('name')
    .where({giver_id:pid});
}

const insertGiver = (giver) => {
    return db('giver')
    .insert(giver)
    .returning('*');
}

const getGiverPassword = (pusername) => {
    return db('giver')
    .select('password','giver_id')
    .where({username:pusername});
}


module.exports = {
    id2NameGiver,
    insertGiver,
    getGiverPassword,
}