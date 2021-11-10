var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_remediesSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_remedies', page_remediesSchema);
module.exports = mongoose.model('page_remedies');
