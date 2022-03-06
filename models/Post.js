const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema of the collection
const PostSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   body: {
      type: String,
      required: true
   },
   author: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true,
      default: Date.now
   }
});


// Expose the Schema as a model
Post = mongoose.model("posts", PostSchema);

module.exports = Post;