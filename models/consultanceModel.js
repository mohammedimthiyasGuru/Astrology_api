var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var consultanceSchema = new mongoose.Schema({  
 consulid : String,
 datas : Array
});
mongoose.model('consultance', consultanceSchema);

module.exports = mongoose.model('consultance');
