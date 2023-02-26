const {authModel}=require("../models/authSchema")
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
let privateKey = "ironmaidenironmaidenironmaidenironmaiden";

const transporter = nodemailer.createTransport({
  direct: true,
  host: "smtp.mail.ru",
  port: 465,
  auth: {
    user: "aarizona3@mail.ru",
    pass: "0bPD1xnaDfd52awVehKU",
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
  login: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username=req.body.username
    let image=req.body.image
    let isDeleted=req.body.isDeleted
    authModel.findOne({ email: email, password: password,username:username,image:image,isDeleted:isDeleted}, (err, doc) => {
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
            from: "aarizona3@mail.ru",
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
