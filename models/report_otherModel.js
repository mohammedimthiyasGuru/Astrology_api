var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_relationshipSchema = new mongoose.Schema({  
 otherid : String,
 datas : Array
});
mongoose.model('report_relationship', report_relationshipSchema);
module.exports = mongoose.model('report_relationship');