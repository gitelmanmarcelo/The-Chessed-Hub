
const { 
    getSortedByAmount,
    getSortedByDate,
    getPendingStories, 
    getHelpedEmail,
    insertStory,
    closeStory,
    } = require('../modules/stories.js');

const _getHelpedEmail = (req,res) => {
    getHelpedEmail(req.params.story_id)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _insertStory = (req,res) => {
    insertStory(req.body)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _getSortedByAmount = (req,res) => {
    getSortedByAmount(req.query.type)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _getSortedByDate = (req,res) => {
    getSortedByDate(req.query.type)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}


const _getPendingStories = (req,res) => {
    getPendingStories(req.body)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _closeStory = (req,res) => {
    closeStory(req.body)
    .then(data => {
        res.json(data);
       })
   .catch( err => {
       console.log(err);
   })
}


module.exports = {
    _getSortedByAmount,
    _getSortedByDate,
    _getHelpedEmail,
    _getPendingStories,
    _insertStory,
    _closeStory,
};

