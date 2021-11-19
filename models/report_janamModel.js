var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_janamSchema = new mongoose.Schema({  
 janid : String,
 datas : Array
});
mongoose.model('report_janam', report_janamSchema);
module.exports = mongoose.model('report_janam');
