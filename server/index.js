const express = require("express")
const dotenv=require("dotenv").config()
const { default: mongoose } = require("mongoose")
const authRouter = require("./routes/authRouter")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded())
const http = require('http');
const server = http.createServer(app);
require("./config/database")
let privateKey = process.env.PRiVET_KEY;

app.use((req, res, next) => {

  if (req.url == '/api/auth/login' || req.url == '/api/auth/confirmCode') {
   return next();
  }

  let auth = req.headers.authorization?.split(' ');
  let token = '';

  if (auth) {
    if (auth.length == 2) {
      token = auth[1];
    }
    else {
      res.status(401).json({ 'message': 'Access Error!' })
    }
  }
  else {
    res.status(401).json({ 'message': 'Access Error!' })
  }



  jwt.verify(token, privateKey, function (err, decode) {
    if (err) {
      res.status(401).json(err);
    }
    else {
        const newToken = jwt.sign({ email: decode.email }, privateKey, {
            expiresIn: "5h",
          });
          res.locals.token = newToken;
      next()
    }
  })

})

app.use((req, res, next) => {
    if (res.locals.token) {
      res.setHeader("Authorization", `Bearer ${res.locals.token}`);
    }
    next();
  });

app.get('/', function (req, res) {
    res.json("Hello");
})
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})