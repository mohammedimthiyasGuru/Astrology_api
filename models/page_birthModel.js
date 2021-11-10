var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_birthSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_birth', page_birthSchema);
module.exports = mongoose.model('page_birth');
