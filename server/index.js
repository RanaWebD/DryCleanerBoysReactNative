const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('./config/config');
const otp = null;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

let authKey = 'asdljflkasjf8668dksjd9999';

authKey = config.authKey;

var settings = {
    "headers": {
        "authkey": authKey,
        "content-type": "application/json"
    }
}

app.post('/sendSMS', (req, res) => {
    axios.post(config.sendSMS, req.body.myKey, settings)
        .then(response => res.send(response.data));
});

// create a post route and get post data from client side request
app.post('/sendOTP', (req, res) => {
    res.send("something")
    // const URL = `${config.sendOTP}${req.body.number}`;
    // //send a post request on MSG91 with the req.body
    // axios.post(URL)
    //     .then(response => { res.send(response.data.message) })
    //     .catch(err => { res.send(err) })
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
    // res.send('otp_verified');
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

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log(PORT));
