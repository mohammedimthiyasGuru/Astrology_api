var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_janamSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_janam', page_janamSchema);
module.exports = mongoose.model('page_janam');
