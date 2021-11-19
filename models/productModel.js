var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var productSchema = new mongoose.Schema({  
 pid : String,
 datas : Array
});
mongoose.model('product', productSchema);
module.exports = mongoose.model('product');
