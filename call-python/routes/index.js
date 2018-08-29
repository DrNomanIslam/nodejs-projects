var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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