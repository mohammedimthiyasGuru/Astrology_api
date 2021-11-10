var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var termsandconSchema = new mongoose.Schema({  
 sub_cat : String,
 datas : Array
});
mongoose.model('termsandcon', termsandconSchema);

module.exports = mongoose.model('termsandcon');
