//Each order is connected to items in the product. This will show me how to connect data
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    } // TODO: Add validation and ensure input cleaning
});

module.exports = mongoose.model('Users', userSchema);