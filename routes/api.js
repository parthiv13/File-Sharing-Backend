var express = require('express'),
router = express.Router(),
walksync = require('../FileUtils/walksync'),
walkDirSync = require('../FileUtils/walkDirSync');

router.get('/', (req, res) => {
    //res.send('Heyooo!');
    let filesList;
    res.send(walksync(__dirname + '/../public/', filesList));
});

router.get('/albums', (req, res) => {
    let albums;
    res.send(walkDirSync(__dirname + '/../public/', albums));
})

module.exports = router;