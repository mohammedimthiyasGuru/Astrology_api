var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_careerSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_career', page_careerSchema);
module.exports = mongoose.model('page_career');
