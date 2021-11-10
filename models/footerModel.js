var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var footerSchema = new mongoose.Schema({  
 datas : Array
});
mongoose.model('footer', footerSchema);
module.exports = mongoose.model('footer');
