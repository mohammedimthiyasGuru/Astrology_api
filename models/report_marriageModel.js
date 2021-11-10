var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_marriageSchema = new mongoose.Schema({  
 chiid : String,
 datas : Array
});
mongoose.model('report_marriage', report_marriageSchema);
module.exports = mongoose.model('report_marriage');
