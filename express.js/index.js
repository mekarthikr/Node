const express = require("express");
const home = require("./routes/home");
const customer = require("./routes/customer");
const { get } = require("express/lib/response");
//const home=require('./routes/home')

const app = express();

app.use(express.static("./asset"));
app.use("/", (req, res) => {
  console.log("LOGGED");
  // throw new Error('Error is thrown')
  
  // next("error");
});
app.get("/", home.index);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(3000, () => {
  console.log("server is running");
});

// Middleware is applied sequentially when you want to apply a Middleware put the use before get
// or if you want to apply it after get put next function inside the get method callback
