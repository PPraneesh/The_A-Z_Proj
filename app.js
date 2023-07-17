const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const  data = require(__dirname+"/data.js");
const mobiles  = data.mobiles;
const laptops = data.laptops;
const accessories = data.accessories;
var name = "Guest";
var s =["mobiles","laptops","accessories"]

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("mobilesImg"));
app.use(express.static("laptopImg"));
app.use(express.static("accessoriesImg"));
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/theLogin/login.html");
});

app.get("/home", (req, res) => {
  res.render("home",{
    name:name,
    products: [mobiles,laptops,accessories],
    s :s
    }
    )});  
app.get("/mobiles", (req, res) => {
  res.render("productCategory", {
    name:name,
    products: mobiles,
    productCat: "mobiles"
  });
});
app.get("/laptops", (req, res) => {
  res.render("productCategory", {
    name:name,
    products: laptops,
    productCat: "laptops"
  });
});
app.get("/accessories", (req, res) => {

  res.render("productCategory", {
    name:name,
    products: accessories,
    productCat: "accessories"
  });
});
app.get("/bestSellers", (req, res) => {
  res.render("bestSellers", {
    name:name,
    products: [mobiles,laptops,accessories],
    s :s
  });
});


app.get("/:productCat/:product", (req, res) => {
let product;
for(let i = 0; i < s.length; i++){
  if( req.params.productCat === s[i]){
    product = data[s[i]];
    for(let i = 0; i < product.length; i++){
      if(product[i].name === req.params.product){
        product = product[i];
        break;
      }
    }
  }
  };
  res.render("productPage", {
    name:name,
    product: req.params.product,
    productCat: product
  });
});

app.post("/", (req, res) => {
  name = req.body.userName;
  var userEmail = req.body.userEmail;
  res.redirect("/home");
});

app.listen(process.env.PORT|| 3000, () => {
  console.log("on port 3K");
});
