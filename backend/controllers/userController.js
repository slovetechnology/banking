const { ServerError } = require("../utils/utils")
const otpGenerator = require('otp-generator')
const User = require('../models').users
const moment = require('moment')



exports.SignupUserAccount = async (req, res) => {
    try {
        const {firstname, lastname, email, phone, dialcode, country, state, password, confirmpassword, agree} = req.body 
        if(!firstname) return res.json({status: 404, msg: `First name field is required`})
        if(!lastname) return res.json({status: 404, msg: `Last name field is required`})
        if(!email) return res.json({status: 404, msg: `Email address field is required`})
        if(!phone) return res.json({status: 404, msg: `Phone number field is required`})
        if(!dialcode) return res.json({status: 404, msg: `Country's dial code field is required`})
        if(!country) return res.json({status: 404, msg: `Your country of origin is required`})
        if(!state) return res.json({status: 404, msg: `Your state of origin is required`})
        if(!password) return res.json({status: 404, msg: `Password field is required`})
        if(!confirmpassword) return res.json({status: 404, msg: `Confirm password field is required`})
        if(!agree) return res.json({status: 404, msg: `Confirm you agree to our terms and policies`})

        const Otp = otpGenerator.generate(10, {specialChars: false, lowerCaseAlphabets: false, upperCaseAlphabets: false})
        
        User.create({
            firstname, lastname, email, password, password, dialcode, country, state, refid: phone, accountnumber: Otp, status: 'online', lastlogin: moment().format('DD-MM-YYYY hh:mmA')
        })
    } catch (error) {
        ServerError(res, error)
    }
}