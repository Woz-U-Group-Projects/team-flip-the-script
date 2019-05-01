const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Item = require('../models/item');

//finding all items
router.get('/', function (req,res,next){
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
                        isExpense: doc.isExpense,
                        meta:{
                            belongsTo: doc.userID,
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
//creating a new item
router.post('/',function (req, res, next){
    Item.findById(req.body.userID)//making sure it's not making a new item
    .then( function(user){
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
            isExpense: req.body.isExpense,
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
                isExpense: result.isExpense,
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
});

//get route for /:itemID

//patch route for /itemID ---- make sure this adds lastModified: Date.now() to every operation of the patch route

//delete route for /:itemID
//this should be a update operation to the isDeleted property of the items
 


module.exports = router;