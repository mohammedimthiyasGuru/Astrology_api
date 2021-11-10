var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var rudraskshSchema = new mongoose.Schema({  
 ruid : String,
 datas : Array
});
mongoose.model('rudrasksh', rudraskshSchema);
module.exports = mongoose.model('rudrasksh');
