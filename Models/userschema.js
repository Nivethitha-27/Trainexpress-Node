const mongoose = require("mongoose");



const registerSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
 
});



module.exports = mongoose.model("register", registerSchema);