var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var subscribeSchema = new mongoose.Schema({  
 subscri_id : String,
 datas : Array
});
mongoose.model('subscribe', subscribeSchema);
module.exports = mongoose.model('subscribe');
