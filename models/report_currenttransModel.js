var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_currenttransSchema = new mongoose.Schema({  
 cuid : String,
 datas : Array
});
mongoose.model('report_currenttrans', report_currenttransSchema);
module.exports = mongoose.model('report_currenttrans');
