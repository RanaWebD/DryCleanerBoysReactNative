const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('./config/config');
const otp = null;

app.use(cors())
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

var settings = {
    "headers": {
        "authkey": config.authKey,
        "content-type": "application/json"
    }
}

app.get("/", (req, res)=>{res.send("hello home!")});

app.post('/sendSMS', (req, res) => {
    console.log(req.body)
    axios.post(config.sendSMS, req.body, settings)
        .then(response => console.log(response.data))
        .catch(err=> res.send(err))
});

// create a post route and get post data from client side request
app.post('/sendOTP', (req, res) => {
    const URL = `${config.sendOTP}${req.body.number}`;
    //send a post request on MSG91 with the req.body
    axios.post(URL)
        .then(response => { res.send(response.data.message) })
        .catch(err => { res.send(err) })
});

// create a post route and get post data from client side request
app.post('/resendOTP', (req, res) => {
    const URL = `${config.resendOTP}${req.body.number}`;
    //send a post request on MSG91 with the req.body
    axios.post(URL)
        .then(response => { res.send(response.data.message) })
        .catch(err => { res.send(err) })
});

//create a post route and get post data from client side request
app.post('/verifyOTP', (req, res) => {
    if (req.body.OTP !== null) {
        let url = `${config.verifyOTP}${req.body.number}&otp=${req.body.OTP}`;
        axios.post(url)
            .then(response => {
                res.send(response.data.message);
                axios.post(config.sendSMS, req.body.data, settings)
                    .then(response => res.send(response.data));
            })
            .catch(err => { res.send(err) })
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(PORT));
