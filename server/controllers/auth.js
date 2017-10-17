const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const config = require('config')

const User = require('./../dao/user')

passport.serializeUser(function(user, done) {
  done(null, user._id)
});

passport.deserializeUser(function(id, done) {
  User.findByObjectId(id, done)
})

passport.use(new FacebookStrategy({
    clientID: config.get('facebook.appId'),
    clientSecret: config.get('facebook.appSecret'),
    callbackURL: config.get('facebook.callbackUrl')
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreateByAuthentication({
      id: profile.id,
      provider: 'facebook',
      accessToken: accessToken
    }, {
      name: profile.displayName,
      emails: profile.emails,
      photos: profile.photos
    }, done)
  }
))

const router = require('express').Router()

router.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope: config.get("facebook.scope")
  }))
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }))
router.get('/logout', function(req, res){
  req.logout()
  res.redirect('/')
})

module.exports = router
