var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var yantrasSchema = new mongoose.Schema({  
 yanid : String,
 datas : Array
});
mongoose.model('yantras', yantrasSchema);
module.exports = mongoose.model('yantras');
