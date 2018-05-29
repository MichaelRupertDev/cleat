var express = require("express");
var Docker = require('dockerode');

var docker = Docker();
var app = express();

var port = 8085

var router = express.Router()

router.get('/list', function(req, res) {
    docker.listContainers(function (err, containers) {
        res.json(containers)
    })
})

app.use('/api', router);

app.listen(port);
console.log('Server running on port ' + port);