const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Item = require('../models/items');


/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("items", {
    title: "Item Page",
    
  });
});



//finding all items
router.get('/all', function (req,res,next){
    Item.find()// TODO: After presentation, refine this for multiple users
        .select("_id name amount occurrenceType dateOfOccurrence categoryID ") // TODO: refine this later with what the app actually needs 
        // TODO: find out how to ignore items where deleted is true
        .exec()
        .then(function (docs){
            res.status(200).json({
                count: docs.length,//shows how many individual items there are
                items: docs.map(function(doc){
                    return {
                        _id: doc._id,
                        name: doc.name,
                        amount: doc.amount,
                        occurrenceType: doc.occurrenceType,
                        dateOfOccurrence: doc.dateOfOccurrence,
                        categoryID: doc.categoryID,
                        meta:{
                            // belongsTo: doc.userID,
                            createdOn: doc.createdOn,
                            lastModified: doc.lastModified,
                            isDeleted: doc.isDeleted
                        } 
                    };
                })
            });
        })
        .catch( function(err){
            res.status(500).json({
                error: err,
                message: 'Way to go, boy-oh. You broke it.'
            });
        });
});
//POST new item
router.post('/add',function (req, res, next){
        const newItem = new Item({
            _id: new mongoose.Types.ObjectId(),//create a new OID
            name: req.body.name,
            amount: req.body.amount,
            occurrenceType: req.body.occurrenceType,
            dateOfOccurrence: req.body.dateOfOccurrence,
            createdOn: Date.now(),
            lastModified: Date.now(),
            categoryID: req.body.categoryID,
            isDeleted:false
        });
        return newItem.save()
        .then(function(result){
            res.status(201).json({
                message:'Item saved',
                createdOnItem: {
                    _id: result._id,
                    name: result.name,
                    amount: result.itemID,
                    occurrenceType: result.occurrenceType,
                    dateOfOccurrence: result.dateOfOccurrence,
                    createdOn: result.createdOn,
                    lastModified: Date.now(),
                    categoryID: result.categoryID,
                    isDeleted: result.isDeleted
                }
            });
        })
        // TODO: This is where the front-end display would go, depending on how I want it
        .catch(function(err){
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


//creating a new item with user validation
/* router.post('/',function (req, res, next){
    Item.findById(req.body.userID)//making sure it's not making a new item
    .then(function(user){
        if(!user){//if user does not exist, returns 404
            return res.status(404).json({
                message: "These aren't the droids you're looking for. User not found.",
                url: "http://localhost:3000/"
            });
        }
        const item = new Item({
            _id: mongoose.Types.ObjectId(),//create a new OID
            name: req.body.name,
            amount: req.body.amount,
            occurrenceType: req.body.occurrenceType,
            dateOfOccurrence: req.body.dateOfOccurrence,
            createdOn: Date.now(),
            lastModified: Date.now(),
            categoryID: req.body.categoryID,
            userID: req.body.userID,
            isDeleted:false
        });
        return item.save();
    })
    .then(function(result){
        res.status(201).json({
            message:'Item stored',
            createdOnItem: {
                _id: result._id,
                name: result.name,
                amount: result.itemID,
                occurrenceType: result.occurrenceType,
                dateOfOccurrence: result.dateOfOccurrence,
                createdOn: result.createdOn,
                lastModified: Date.now(),
                categoryID: result.categoryID,
                userID: result.userID,
                isDeleted: result.isDeleted
            }
        });
    })
    .catch(function(err){
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}); */ 


//get route for /:itemID

router.get("/:itemID", function(req, res, next) {
  Item.find() // TODO: After presentation, refine this for multiple users
    .select("_id name amount occurrenceType dateOfOccurrence categoryID ") // TODO: refine this later with what the app actually needs
    // TODO: find out how to ignore items where deleted is true
    .exec()
    .then(function(docs) {
      res.status(200).json({
        count: docs.length, //shows how many individual items there are
        items: docs.map(function(doc) {
          return {
            _id: doc._id,
            name: doc.name,
            amount: doc.amount,
            occurrenceType: doc.occurrenceType,
            dateOfOccurrence: doc.dateOfOccurrence,
            categoryID: doc.categoryID,
            meta: {
              // belongsTo: doc.userID,
              createdOn: doc.createdOn,
              lastModified: doc.lastModified,
              isDeleted: doc.isDeleted
            }
          };
        })
      });
    })
    .catch(function(err) {
      res.status(500).json({
        error: err,
        message: "Way to go, boy-oh. You broke it."
      });
    });
});

//patch route for /itemID ---- make sure this adds lastModified: Date.now() to every operation of the patch route

//delete route for /:itemID
//this should be a update operation to the isDeleted property of the items
 


module.exports = router;