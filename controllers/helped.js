const { 
    getHelpedById, 
    insertHelped,
    getHelpedPassword,
    } = require('../modules/helped.js');


const _getHelpedPassword = (req,res) => {
    getHelpedPassword(req.body.username)
    .then(data => {
        res.json(data);
       })
   .catch( err => {
       console.log(err);
   })
};

const _insertHelped = (req,res) => {
    insertHelped(req.body)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _getHelpedById = (req, res) => {
    if (!req.params.id)
        res.status(404).send('not found');
    getHelpedById(req.params.id)
    .then(data => {
        console.log(data);
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
};

module.exports = {
    _insertHelped,
    _getHelpedPassword,
    _getHelpedById,
};

