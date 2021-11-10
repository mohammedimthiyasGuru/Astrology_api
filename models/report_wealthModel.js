var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_wealthSchema = new mongoose.Schema({  
 weid : String,
 datas : Array
});
mongoose.model('report_wealth', report_wealthSchema);
module.exports = mongoose.model('report_wealth');
