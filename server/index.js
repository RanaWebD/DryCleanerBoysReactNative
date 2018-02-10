const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const otp = null;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


var settings = {
    "headers": {
        "authkey": "192579Aatee7h2Bnf5a56df3d",
        "content-type": "application/json"
    }
}
var data = {
    "sender": "SOCKET",
    "route": "4",
    "country": "91",
    "sms": [
        {
            "message": "Message1",
            "to": [
                "8802869692"
            ]
        }
    ]
}

// create a post route and get post data from client side request
app.post('/sendOTP', (req, res) => {
    const URL = `http://control.msg91.com/api/sendotp.php?authkey=192579Aatee7h2Bnf5a56df3d&mobile=${req.body.number}`;
    //send a post request on MSG91 with the req.body
    axios.post(URL)
        .then(response => { res.send(response) })
        .catch(err => { res.send(err) })
});



//create a post route and get post data from client side request
app.post('/verifyOTP', (req, res) => {
    if (req.body.OTP !== null) {
        let url = `https://control.msg91.com/api/verifyRequestOTP.php?authkey=192579Aatee7h2Bnf5a56df3d&mobile=${req.body.number}&otp=${req.body.OTP}`;
        axios.post(url)
            .then(response => {
                console.log(response)
                axios.post('http://api.msg91.com/api/v2/sendsms', req.body.data, settings).then(res => console.log(res))
            })
            .catch(err => { res.send(err) })
    }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))