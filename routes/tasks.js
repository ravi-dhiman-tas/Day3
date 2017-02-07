var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ravid7000:mlab@ds145669.mlab.com:45669/mlab-test', ['tasks']);

// Get all tasks
router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get single task
router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({_id: mongojs.ObjectId(req.param.id)}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

module.exports = router;