const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    occurrenceType: {type: String, default: 'one-time', required:true}, // TODO: What should the default be, or should we have one? TODO: Set this default in the form.
    dateOfOccurrence:{type: Date, default:Date.now, required: true},
    createdOn:{type: Date, default:Date.now, required: true},
    lastModified:{type: Date, default: Date.now, required: true},
    categoryID:{type:Number, required:true},
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        default: "5ca3e863f9833868503b4ed9"
    }, // TODO: Make this a valid OID
    // TODO: Create a models/user.js file for the data in userID
    isExpense:{type:Boolean, required:true},// TODO: Make this default to true in the form
    isDeleted: {type:Boolean, default:false, required: true}
});

module.exports = mongoose.model('Item',itemSchema);

/* 
Category IDs:
Income: 0
Living: 1
Transportation: 2
Experiences: 3
Health: 4
Debt: 5
Wealthbuilding: 6
 */