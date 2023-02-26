const {authModel}=require("../models/authSchema")
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
let privateKey = process.env.PRiVET_KEY;

const transporter = nodemailer.createTransport({
  direct: true,
  host: process.env.HOST,
  port: 465,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  secure: true,
});

const authController = {
  getAll: (req, res) => {
    authModel
      .find({ isDeleted: false })
      .select("_id email")
      .exec((err, docs) => {
        if (!err) res.json(docs);
        else res.status(500).json(err);
      });
  },
  register: async (req,res)=>{
    const {email,username,password,image}=req.body
    const user= await authModel.findOne({email:email})
    if(!user){
       const newAuth=new authModel({
         email:email,
         username:username,
         password:password,
         image:image
       })
        await newAuth.save((err,doc)=>{
          if(err){
            return res.status(500).json({
              message:"err"
            })
          }else{
            return res.status(201).json({
              message:"succes"
            })
          }
       })
    }
  },
  login: (req, res) => {
    const {email,password}=req.body
    authModel.findOne({ email: email, password: password}, (err, doc) => {
      if (!err) {
        if (doc) {
          console.log("doc", doc);
          let confirmCode = Math.floor(Math.random() * 999999);

          doc.confirmCode = confirmCode;

          doc.save((saveErr, saveDoc) => {
            if (!saveErr) {
              res.json(saveDoc);
            } else {
              res.status(500).json(saveErr);
            }
          });

          var mailOptions = {
            from: process.env.USER,
            to: doc.email,
            subject: "Login Confirm Code",
            text: "Confirm Code: " + confirmCode,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              return console.log(error);
            }
          });
        } else {
          res.status(404).json({ msg: "not found" });
        }
      } else {
        res.status(500).json(err);
      }
    });
  },
  confirmCode: (req, res) => {
    let confirmCode = req.body.confirmCode;
    let webUserId = req.body.webUserId;

    authModel.findOne(
      { confirmCode: confirmCode, id: webUserId, isDeleted: false },
      (err, doc) => {
        if (!err) {
          if (doc) {
            let token = jwt.sign({ email: "a@a.com" }, privateKey, {
              algorithm: "HS256",
              expiresIn: "5h",
            });
            res.json({ token: token });
          } else {
            res.status(404).json({ message: "not found" });
          }
        } else {
          res.status(500).json(err);
        }
      }
    );
  },
};

module.exports={
    authController
}
