const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");

const userModel = new mongoose.Schema(
      {
            firstname:{
                  type: String,
                  unique: true,
                  required: [true, "first name is required"],
                  minlength: [4, "first name should be atleast 4 charactor long"],

            },

            lastname: {
                  type: String,
                  unique: true,
                  required: [true, "last name is required"],
                  minlength: [4, "last name should be atleast 4 charactor long"],

            },
            contact: {
                  type: String,
                  unique: true,
                  required: [true, "contact is required"],
                  maxlength: [10, "contact must not exceed 10 charactor"],
                  minlength: [10, "contact should be atleast 10 charactor long"],
                  
            },
            city: {
                  type: String,
                  unique: true,
                  required: [true, "city name is required"],
                  minlength: [3, "city should be atleast 3 charactor long"],
                  
            },
            gender: {type: String, enum: ["Male", "Female", "Others"]},
            
            email:{
                  type: String,
                  unique: true,
                  required: [true, "Email is required"],
                  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                  'Please fill a valid email address'],
            },
            password: {
                  type: String,
                  select: false,
                  maxlength: [15, "Password should not exceed more than is characteristics"],
                  minlength: [6, "minimum 6 character is required"],
                  // match: []
            },
            resetPasswordToken: {
                  type: String,
                  default: "0",
            },

            avatar: {
                  type: Object,
                  default:{
                  filedId: "",
                  url: "https://images.unsplash.com/photo-1685999298638-553de9deb9fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=366&q=80",
                  },
            },
         
          
      },

      { timestamps: true}
);

userModel.pre("save", function (){
     if(!this.isModified("password")) {
      return;
     }

     let salt = bcrypt.genSaltSync(10);
     this.password = bcrypt.hashSync(this.password, salt);

});

userModel.methods.comparepassword = function(password){
      return bcrypt.compareSync(password, this.password);
};

userModel.methods.getjwttoken = function(){
      
return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,

    });

};

const user = mongoose.model("user", userModel);

module.exports = user;



