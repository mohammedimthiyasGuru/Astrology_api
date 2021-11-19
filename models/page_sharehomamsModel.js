var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_sharehomamsSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_sharehomams', page_sharehomamsSchema);
module.exports = mongoose.model('page_sharehomams');
