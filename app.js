require("dotenv").config();

const express = require('express');
const app = express();
const mongodb = require('mongoose');
require("./db/conn")
const cookieParser = require("cookie-parser");

const Products = require("./models/productsSchema");

const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

const corsOptions = {
  origin: 'https://amazon-clone-mern-stack-by-piyush.onrender.com',
  credentials: true
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router)

const port = process.env.PORT || 8005;


//for deployment purposes::

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`server is running on PORT : ${port}`);
});

DefaultData();
