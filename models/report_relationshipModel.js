var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_otherSchema = new mongoose.Schema({  
 reid : String,
 datas : Array
});
mongoose.model('report_other', report_otherSchema);
module.exports = mongoose.model('report_other');
