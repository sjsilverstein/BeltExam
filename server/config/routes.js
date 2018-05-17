const mongoose = require('mongoose');
const control = require('../controllers/petController.js')();
const path = require('path');

module.exports = function(app){
    
    app.get('/pets', function(req, res){
        control.index(req, res);
    });
    app.get('/pet/:id', function(req,res){
        control.pet(req,res);
    });
    app.post('/pets', function(req,res){
        control.createPet(req,res);
    });
    app.put('/pets/edit/:id', function(req,res){
        control.updatePet(req,res);
    });
    app.delete('/pets/:id', function(req,res){
        control.deletePet(req,res);
    }); 
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });    
}