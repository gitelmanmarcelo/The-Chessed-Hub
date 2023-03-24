const {db} = require('../config/db.js');

const getHelpedEmail = (story_id) => {
    return db('stories')
    .innerJoin('helped','stories.helped_id','helped.helped_id')
    .select('email')
    .where({story_id:story_id});
} 

const getSortedByAmount = (type) => {
    console.log('amount')
        return db('stories')
        .select('story_id','creation_date','story','amount')
        .whereNull('giver_id')
        .orderBy('amount',type);
}

const getSortedByDate = (type) => {
    return db('stories')
    .select('story_id','creation_date','story','amount')
    .whereNull('giver_id')
    .orderBy('creation_date',type);
}


const getPendingStories = () => {
    return db('stories')
    .select('story_id','creation_date','story','amount')
    .whereNull('giver_id')
    .orderBy('creation_date');
}

const insertStory = (story) => {
    return db('stories')
    .insert(story)
    .returning('*');
}

const closeStory= (info) => {
    return db('stories')
    .update(info)
    .where({story_id:info.story_id})
    .returning('*');
}


module.exports = {
    getSortedByAmount,
    getSortedByDate,
    getHelpedEmail,
    getPendingStories,
    insertStory,
    closeStory,
}