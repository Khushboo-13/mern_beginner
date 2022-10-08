const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  "profile-picture": {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("userdata", UserSchema);
module.exports = UserModel;