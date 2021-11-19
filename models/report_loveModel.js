var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_loveSchema = new mongoose.Schema({  
 lid : String,
 datas : Array
});
mongoose.model('report_love', report_loveSchema);
module.exports = mongoose.model('report_love');
