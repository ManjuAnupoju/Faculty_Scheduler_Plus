const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Login')
    .then(() => console.log('DB connected...'))
    .catch(err => console.error(err));

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const FacultyloginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const FacultySchema = mongoose.Schema({
    facultyName:{
        type: String,
        required:true,
    },
    weekName: {
        type: String,
        required: true
    },
    selectedHours: {
        type: String,
        required: true
    },
    workload: {
        type: String,
        required: true
    }

});
const FacultyloginModel = mongoose.model('facultymail', FacultyloginSchema);
const UserModel = mongoose.model('admin', UserSchema);
const FacultyModel=mongoose.model('work',FacultySchema);
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("login success")
            }
            else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("NO record existed")
        }
    })
});
app.post('/facultylogin', async (req, res) => {
    const { email, password } = req.body;
    FacultyloginModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("login success")
            }
            else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("NO record existed")
        }
    })
});
app.post('/facultyschedule', async (req, res) => {
    console.log('Request received:', req.body);
    const { facultyName, weekName, selectedHours, workload } = req.body;
    try {
        const newdata = new FacultyModel({ facultyName, weekName, selectedHours, workload });
        const savedData = await newdata.save();
        console.log('Data saved successfully:', savedData);
        return res.json("Successfully added!");
    } catch (err) {
        console.error('Error saving data:', err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/retrieveFacultyWorkload', async (req, res) => {
    const { weekName, from, to } = req.query;
    
    try {
        // Retrieve faculty members with workload 0 within the specified range and for the given weekName
        const facultyWithZeroWorkload = await FacultyModel.find({
            weekName: weekName,
            selectedHours: { $gte: from, $lte: to },
            workload: '0'
        });
    
        res.json(facultyWithZeroWorkload);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/viewtimetable', async (req, res) => {
    const {facultyName}=req.query;
    try{
        const documents=await FacultyModel.find({facultyName:facultyName});
        res.json(documents);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'Internal server error'});
    }
    });

app.listen(3001,()=>{
    console.log("server is running");
})