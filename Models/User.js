const mongoose = require('mongoose');
var crypto = require('crypto'); 
// const Rol = require('./Rol');

const UserSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  // rol: {type: Rol, required: true},
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  dni: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
// // Method to set salt and hash the password for a user 
// UserSchema.methods.setPassword = function(password) { 
     
//   // Creating a unique salt for a particular user 
//      this.salt = crypto.randomBytes(16).toString('hex'); 
   
//      // Hashing user's salt and password with 1000 iterations, 
      
//      this.hash = crypto.pbkdf2Sync(password, this.salt,  
//      1000, 64, `sha512`).toString(`hex`); 
//  }; 
   
//  // Method to check the entered password is correct or not 
//  UserSchema.methods.validPassword = function(password) { 
//      var hash = crypto.pbkdf2Sync(password,  
//      this.salt, 1000, 64, `sha512`).toString(`hex`); 
//      return this.hash === hash; 
//  }; 
   
//  // Exporting module to allow it to be imported in other files 
//  const User = module.exports = mongoose.model('User', UserSchema); 