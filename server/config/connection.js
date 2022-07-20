const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Matt658041:Gateway3@cluster0.cq8fpb2.mongodb.net/Penny-for-your-thoughts?retryWrites=true&w=majority",{ //process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
