var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_wealthSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_wealth', page_wealthSchema);
module.exports = mongoose.model('page_wealth');
