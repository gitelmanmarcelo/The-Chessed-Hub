const express = require('express');
const { _getSortedByDate,
  _getSortedByAmount,
  _getHelpedEmail,
  _getPendingStories,
  _insertStory,
  _closeStory,
  } = require("../controllers/stories.js");

const router = express.Router()

router.get('/pending', _getPendingStories );

router.get('/sortedByDate', _getSortedByDate );

router.get('/sortedByAmount', _getSortedByAmount );

router.get('/hid/:story_id', _getHelpedEmail );

router.post('/complete', _closeStory );


router.post('/register',_insertStory);

module.exports = router;
