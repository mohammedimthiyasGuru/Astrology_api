var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var homamSchema = new mongoose.Schema({  
 hid : String,
 datas : Array
});
mongoose.model('homam', homamSchema);
module.exports = mongoose.model('homam');
