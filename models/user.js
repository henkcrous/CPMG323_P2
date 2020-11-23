let mongoose = require('mongoose');

// User Schema
let UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  meta: {
    emailb: Boolean, 
    nameB: Boolean,
    id: Boolean,
    title: Boolean,
    phonenumber: Boolean,
    gender: Boolean,
    salary: Boolean,
    age: Boolean,
    language: Boolean,
    race: Boolean
  }
});
const User = module.exports = mongoose.model('User', UserSchema);
