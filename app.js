const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose')
require('dotenv').config() 

const session =  require('express-session') // sessions
const passport = require('passport') // passport 
const passportLocalMongoose = require('passport-local-mongoose') 
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate')

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// website's data
app.use(express.static("public"));
app.use(express.static("mobilesImg"));
app.use(express.static("laptopImg"));
app.use(express.static("accessoriesImg"));
app.use(express.static("assets"));

const  data = require(__dirname+"/data.js");
const mobiles  = data.mobiles;
const laptops = data.laptops;
const accessories = data.accessories;
var name = "Guest";
var arr = [mobiles,laptops,accessories];
var s =["mobiles","laptops","accessories"]
// website's data

var cart=[];
var product;

var userInterests =[]

// sessions starts
app.use(session({
  secret: 'our little secret.',
  resave: false,
  saveUninitialized: false
}))


app.use(passport.initialize())
app.use(passport.session())

mongoose.connect('mongodb://localhost:27017/userDB');

const userSchema = new mongoose.Schema({
  email:String,
  name:String,
  password:String,
  googleId:String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User",userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {
  name = profile.displayName;
  User.findOrCreate({ username: profile.displayName,googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/theLogin/login.html");
});

app.get("/login",(req,res)=>{
  res.render("login")
});
app.get("/register",(req,res)=>{
  res.render("register")
});

app.get("/auth/google",
  passport.authenticate("google",{scope:["profile"]})
)
app.get("/auth/google/secrets", 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });
app.post("/register",(req,res)=>{
  User.register({username:req.body.username},req.body.password,function(err,user){
    if(err){
      console.log(err);
      res.redirect("/register")
    }
    else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/home")
      })
    }
  })
})
app.post("/login",(req,res)=>{

  const user = new User({
    username:req.body.username,
    password:req.body.password
  })
  req.login(user,function(err){
    if(err){
      console.log(err)
    }
    else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/home")
      })
    }
  })
});
app.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
app.get("/home", (req, res) => {
  if(req.isAuthenticated()){
  res.render("home",{
    name:name,
    products: [mobiles,laptops,accessories],
    s :s
    })
  }
  else{
    res.redirect("/login")
  }
});  

app.post("/home", (req, res) => {
  let userSearch = req.body["search"];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j].name.toLowerCase().replace(/\s/g, '') == userSearch.toLowerCase().replace(/\s/g, '')){
        res.redirect("/"+s[i]+"/"+arr[i][j].name);
        break;
      }
    }
  }
})
app.get("/mobiles", (req, res) => {
  if(req.isAuthenticated()){
  res.render("productCategory", {
    name:name,
    products: mobiles,
    productCat: "mobiles"
  });
}else{
  res.redirect("/login")
}
});
app.get("/laptops", (req, res) => {

  if(req.isAuthenticated()){
  res.render("productCategory", {
    name:name,
    products: laptops,
    productCat: "laptops"
  });
}else{
  res.redirect("/login")
}
});
app.get("/accessories", (req, res) => {

  if(req.isAuthenticated()){
  res.render("productCategory", {
    name:name,
    products: accessories,
    productCat: "accessories"
  });
}else{
  res.redirect("/login")
}
});
app.get("/:productCat/:product", (req, res) => {
  if(req.isAuthenticated()){
  for(let i = 0; i < s.length; i++){
    if( req.params.productCat === s[i]){
      product = data[s[i]];
      for(let j = 0; j < product.length; j++){
        if(product[j].name === req.params.product){
          product = product[j];
          break;
        }
      }
    }
    };
    userInterests.push(product)
    console.log("user interests are "+(userInterests))

    res.render("productPage", {
      name:name,
      product: product,
      productCat: product
    });
  }else
  res.redirect("/login")
  });
app.post("/cart",(req,res)=>{
    cart.push(product);
    console.log("cart"+cart)
    res.redirect("/home");
  })
app.get("/bestSellers", (req, res) => {
  if(req.isAuthenticated()){
  res.render("bestSellers", {
    name:name,
    products: [mobiles,laptops,accessories],
    s :s
  });
}else{
  res.redirect("/login")
}
});


app.post("/", (req, res) => {
  name = req.body.userName;
  var userEmail = req.body.userEmail;
  res.redirect("/home");
});

app.listen(3000, () => {
  console.log("on port 3000");
});
