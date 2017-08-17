var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*使用本机的Promise*/
mongoose.Promise = global.Promise;

var productSchema = new Schema({
  "productId":String,
  "productName":String,
  "salePrice":Number,
  "productImage":String,
});

module.exports = mongoose.model('Good',productSchema);
