var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PaymentDetails = new Schema({
    // orderCreationId : {type : String},
    razorpayPaymentId : {type : String},
    razorpayOrderId : {type : String},
    razorpaySignature : {type : String},
    Aid : {type : Number},
    billid : {type : Number},
    // amount : {type : Number}
}, {
    collection : "PaymentDetails"
});

module.exports = mongoose.model("PaymentDetails", PaymentDetails);