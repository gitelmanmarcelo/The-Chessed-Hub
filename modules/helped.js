const {db} = require('../config/db.js');

const insertHelped = (helped) => {
    return db('helped')
    .insert(helped)
    .returning('*');
}

const getHelpedPassword = (username) => {
    return db('helped')
    .select('password','helped_id')
    .where({username:username});
}

const getHelpedById = (hid) => {
    return db('helped')
    .select('helped_id','name','email','username','password')
    .where({helped_id:hid});
}

module.exports = {
    getHelpedPassword,
    getHelpedById,
    insertHelped,
}