const bcrypt = require('bcryptjs');
const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const authentication = require('../middleware/authentication');

require('../DB/connect');
const User = require('../Models/userSchema');
const Blog = require('../Models/blogSchema');

app.get('/', (req, res) => {
    res.send("hello world from the server ");
});

// using async await
app.post('/register', async (req, res) => {

    try {
        const { name, email, phone, work, password, cpassword } = req.body;

        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ error: "please fill all the entries correctly" });
        }

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "user already exist please fill all the entries correctly" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password and confirm password do not match" });
        }

        const user = new User({ name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword });

        const save = await user.save();

        if (save) {
            res.status(201).json({ message: "success" })
        }
    } catch (err) {
        console.log(err);
    }
})

app.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "invalid credentials" })
        }
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ error: "invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: "invalid credentials" })
        }

        const token = await user.generateAuthToken();

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });

        res.status(201).json({ id: user._id });

    } catch (err) {
        console.log(err);
    }

})

app.get('/about', authentication, (req, res) => {
    res.send(req.rootUser);
});

app.get('/getdata',async (req,res)=>{
    const token = req.cookies.jwtoken;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({ _id: verify._id, "tokens.token": token });

    if (!rootUser) {
        res.send({
            name: "",
            email: "",
            phone: "",
            id:""
        })
    }
    else
    {
        res.send({
            name: rootUser.name,
            email: rootUser.email,
            phone: rootUser.phone,
            id:rootUser._id
        })
    }
})

app.post('/contact',authentication,async (req,res) => {
    try{
        const {name,email,phone,message} = req.body;

        if(!name || !email || !phone || !message)
        {   
            console.log("form not filled");
            return res.json({
                error : 'please fill the contact form'
            })
        }

        const user = await User.findOne({_id:req.userId});

        if(user)
        {
            const userMessage = await user.addMessage(name,email,phone,message);
            await user.save();
            res.status(201).json({message:"message delivered successfully"})
        }

    }
    catch(err){
        console.log(err);
    }
})

app.get('/logout' , (req,res) => {
    res.clearCookie("jwtoken" , {path:'/'});
    res.status(200).send("user logout sucessfully")
})

app.post('/addBlog',async  (req,res)=>{
    try{
        const {name,topic,autorId,message} = req.body;

        if(!name || !topic || !message || !autorId)
        {
            return res.status(422).json({err:"please fill the blog entries correctly"})
        }
        const blog = new Blog({name:name,topic:topic,authorId:autorId,message:message});
        const save = await blog.save();

        if(save)
        {
            return res.status(201).json({message:"success"});
        }
        
    }catch(err)
    {
        console.log(err);
    }
})

app.get('/getblog',async (req,res)=>{
    const blog = await Blog.find({});
    return res.send(blog);
})
module.exports = app;
