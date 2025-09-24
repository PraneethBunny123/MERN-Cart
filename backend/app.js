const port = 4000

const express = require("express")
const app = express()
require('dotenv').config(); // for env imports
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors");
const Product = require("./models/Product");
const { request } = require("http");
const { error } = require("console");
const User = require("./models/User")

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
    let products = await Product.find({})
    let id;

    if(products.length > 0) {
        let lastProduct = products.slice(-1)[0]
        id = lastProduct.id+1
    } else {
        id = 1
    }

    const product = new Product({
        id: id,
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

// api for deleting products
app.delete('/removeProduct/:id', async (req, res) => {
    const deletedProduct = await Product.findOneAndDelete({id: req.params.id})
    console.log("removed")

    res.json({
        success: true,
        name: deletedProduct.name
    })
})

// creating api for all products
app.get("/allProducts", async (req, res) => {
    let products = await Product.find({})

    console.log("all products fetched")
    res.send(products)

})

// creating api for new collections
app.get("/newcollections", async (req, res) => {
    let newCollection = await Product.find({}).sort({date: -1}).limit(8)

    console.log("fetched new collections")
    res.send(newCollection)
})

// creating api for popular products
app.get("/popular", async (req, res) => {
    let popular = await Product.find({category: "women"}).sort({new_price: -1}).limit(4)

    console.log("fetched popular products in women")
    res.send(popular)
})

// creating endpoints for user registration
app.post('/signup', async (req, res) => {
    let userCheck = await User.findOne({email: req.body.email})

    if(userCheck) {
        return res.status(400).json({
            success: false,
            errors: "The user email was already registered"
        })
    }

    let cart = {}
    for(let i=0; i<300; i++) {
        cart[i] = 0;
    }

    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
    })

    await user.save()

    // creating jwt token for authentication
    const data = {
        user: {id: user.id}
    }
    const token = jwt.sign(data, 'secret_ecom')
    return res.json({
        success: true,
        token
    })
})

// endpoint for user login
app.post('/login', async (req, res) => {
    let user = await User.findOne({email: req.body.email})
    if(user) {
        const passCompare = req.body.password === user.password
        if(passCompare) {
            const data = {
                user: {id: user.id}
            }
            const token = jwt.sign(data, 'secret_ecom')
            return res.json({
                success: true,
                token
            })
        } else {
            return res.json({
                success: false,
                errors: 'Incorrect Password'
            })
        }
    } else {
        return res.json({
            success: false,
            errors: 'Incorrect email id'
        })
    }
})

// creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) {
        res.status(401).send({errors: "Please authenticate using valid token"})
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecom')
            req.user = data.user
            next()
        } catch(err) {
            res.status(401).send({errors: err})
        }
    }
}

// creating endpoint for adding products in cartData
app.post("/addtocart", fetchUser, async (req, res) => {
    // console.log(req.body, req.user)
    const itemId = req.body.itemId
    const userId = req.user.id

    let user = await User.findById(userId)

    user.cartData[itemId] = (0 || user.cartData[itemId]) + 1

    await User.findByIdAndUpdate(userId, {cartData: user.cartData})

    console.log("added", itemId)

    res.json({
        success: true,
        cartData: user.cartData
    })
})

// creating endpoint to remove products from cartData
app.post("/removefromcart", fetchUser, async (req, res) => {
    // console.log(req.body, req.user)
    const itemId = req.body.itemId
    const userId = req.user.id

    let user = await User.findById(userId)

    if(user.cartData[itemId] > 0) {
        user.cartData[itemId] -= 1
    }

    await User.findByIdAndUpdate(userId, {cartData: user.cartData})
    console.log("removed", itemId)

    res.json({
        success: true,
        cartData: user.cartData
    })
})

// creating endpoint to get cartData
app.get('/getcart', fetchUser, async (req, res) => {
    const userId = req.user.id
    let user = await User.findById(userId)

    res.json({
        success: true,
        cartData: user.cartData
    })
})

app.listen(port, (err) => {
    if(!err) {
        console.log("server running on port: "+ port)
    } else {
        console.log("error"+ err)
    }
})