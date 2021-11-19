var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_relationshipSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_relationship', page_relationshipSchema);
module.exports = mongoose.model('page_relationship');
