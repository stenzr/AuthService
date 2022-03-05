const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema of the collection
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

// Expose the Schema as a model
module.exports = User = mongoose.model("users".UserSchema);
