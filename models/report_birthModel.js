var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_birthSchema = new mongoose.Schema({  
 birid : String,
 datas : Array
});
mongoose.model('report_birth', report_birthSchema);
module.exports = mongoose.model('report_birth');
