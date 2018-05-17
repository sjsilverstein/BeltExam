module.exports = function(){
    require('../models/pet.js')();
    return {
        index: function(req, res){
            Pet.find({}, function(err,pets){
                if(err){
                    console.log(err);
                }
                res.json({message: "Yeah, All Authors", pets:pets});
            });
            console.log("Looking for Pets");
        },
        pet:function(req, res){
            let id = req.params.id;
            Pet.findOne({_id:id}, function(err, pet){
                if(err){
                    console.log('Something is Wrong');
                    res.json({status: "errors", errors:err});
                }else{
                    console.log('Found the pet');

                    res.json(pet);
                }
            });
        },
        createPet: function(req, res){
            let newPet = new Pet(req.body)
            console.log("This is newPet in Controller.")
            console.log(newPet)
            newPet.save(function(err){
                if(err){
                    console.log('Something When wrong in save');
                    res.json({status: "errors", errors:err});
                }else{
                    console.log('Successfully saved author');
                    res.json({message: "Success"});
                }
            });
            console.log('Saving Author...');
        },
        updatePet: function(req, res){
            let authorId = req.params.id;
            
            Pet.findByIdAndUpdate( authorId, req.body, { runValidators: true }, function(err){
                if(err){
                    console.log('Something went Wrong');
                    res.json({status: "errors", errors: err})
                }else{
                    console.log('Successfully edited a Task!');
                    res.json({message:'Successfully edited a Task!'});
                }
            });
        },
        deletePet: function(req, res){
            let authorId = req.params.id;
            Pet.deleteOne({_id: authorId}, function(err){
                if (err){
                    console.log("Error's in Deleting");
                    res.json({error: err});
                }else{
                    console.log("Successfuly Deleted");
                    res.json({message: "Successfully Delete"});
                }
            });
        }
    }
}