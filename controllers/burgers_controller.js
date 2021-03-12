const router = require('express').Router();
const burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.selectAll(function(data){
        const hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj)
    })
})

router.post('/api/new', function (req, res) {
    console.log(req.body)
    burger.insertOne(req.body.burger_name, function(data){
        res.json(data)
    })
})

router.put('/api/update', function (req, res) {
    console.log(req.body)
    burger.updateOne(req.body.id, function (data) {
        res.json(data)
    })
})
module.exports = router;