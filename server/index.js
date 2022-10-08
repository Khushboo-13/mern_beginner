const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const multer=require('multer');
const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file,cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
    },
});

const filefilter=(req,file,cb)=>{
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"||file.mimetype==="image/jpg"){
        cb(null,true);
    }
    else{
        cb(new Error("incorrect file type"),false);
    }
}
const upload=multer({
    storage:storage,
    fileFilter: filefilter,
});

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/uploads",express.static('uploads'));
mongoose.connect(
  "mongodb://localhost/users"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/addUser",upload.single('file'), async (req, res) => {
  const user = req.body;
  console.log(req.file);
  user["profile-picture"]=req.file.path;
  const newUser = new UserModel(user);
  await newUser.save();
  console.log(newUser._id);
  res.json({
    success: true,
    id:newUser._id,
  });
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});