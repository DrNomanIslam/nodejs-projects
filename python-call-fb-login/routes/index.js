var auth =require('../auth');
var express = require('express');
var router = express.Router();
var FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport');
router.get('/call', function(req, res, next) {
  call_python(req,res)
});




module.exports = router;


function call_python(req,res) {
    console.log("Calling python ... ");

    let pythonscript;
    let process = require('child_process');
    pythonscript = require('path').join(require('path').parse(require('path').join(__dirname)).dir,'python_scripts','hello.py');

    var args1="1"
    var args2="2"


    var spawn = process.spawn,
    ls    = spawn("python",[pythonscript,args1,args2]);

    ls.stdout.on('data', function (data) {
        res.send('stdout: ' + data.toString());
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString());
    });

    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code.toString());
    });

    console.log("Called python ... ");

}

passport.use('facebook', new FacebookStrategy({
  clientID        : auth.fb.clientID,
  clientSecret    : auth.fb.clientSecret,
  callbackURL     : auth.fb.callbackURL
},
 
  // facebook will send back the tokens and profile
  function(access_token, refresh_token, profile, done) {
    // asynchronous
    process.nextTick(function() {
     
      
            /*var newUser = new User();
 
            // set all of the facebook information in our user model
            newUser.fb.id    = profile.id; // set the users facebook id                 
            newUser.fb.access_token = access_token; // we will save the token that facebook provides to the user                    
            newUser.fb.firstName  = profile.name.givenName;
            newUser.fb.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
            newUser.fb.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first*/

	     console.log('next tick called');
    })
}));
            
         
    
router.get('/', passport.authenticate('facebook', { 
      scope : ['public_profile', 'email']
}));
