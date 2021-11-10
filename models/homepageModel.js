var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var homepageSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('homepage', homepageSchema);
module.exports = mongoose.model('homepage');
