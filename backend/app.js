const port = 4000

const express = require("express")
const app = express()
require('dotenv').config(); // for env imports
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors");
const { type } = require("os");
const Product = require("./models/Product")

app.use(express.json())
app.use(cors())

// mongodb connection 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to database successfully"))
.catch(err => console.log(err))

// API creation

app.get("/", (req, res) => {
    res.send("express app is running")
})

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

// Creating upload endpoint for images
app.use('/images', express.static(path.join(__dirname, '/upload/images')))

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// adding product in database using schema
app.post('/addProduct', async (req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    })
    console.log(product)

    await product.save()
    console.log("Saved to database")

    res.json({
        success: true,
        name: req.body.name
    })
})


app.listen(port, (err) => {
    if(!err) {
        console.log("server running on port: "+ port)
    } else {
        console.log("error"+ err)
    }
})