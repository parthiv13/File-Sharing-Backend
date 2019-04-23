var express = require('express'),
router = express.Router();

router.get('/', (req, res) => {
    res.send('Heyooo!');
});

module.exports = router;