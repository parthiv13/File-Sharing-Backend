const passport = require('passport'),
LocalStrategy = require('passport-local'),
logger = require('./winston');

module.exports = function(passport) {
    passport.serializeUser()
}