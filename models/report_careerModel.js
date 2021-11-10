var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var report_careerSchema = new mongoose.Schema({  
 carid : String,
 datas : Array
});
mongoose.model('report_career', report_careerSchema);
module.exports = mongoose.model('report_career');
