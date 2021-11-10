var mongoose = require('mongoose');

const Schema = mongoose.Schema; 

var OrderDetailSchema = new mongoose.Schema({  
  datas:  Array,
  order_type : String,
  user_id : String
});
mongoose.model('OrderDetail', OrderDetailSchema);

module.exports = mongoose.model('OrderDetail');
