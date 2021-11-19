var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var sharedhomamSchema = new mongoose.Schema({  
 shid : String,
 datas : Array
});
mongoose.model('sharedhomam', sharedhomamSchema);
module.exports = mongoose.model('sharedhomam');
