const exec = require('child_process').exec;


function os_func() {
    this.execCommand = function(cmd, callback) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }

            callback(stdout);
        });
    }
}
var os = new os_func();

os.execCommand('dir', function (returnvalue) {
    console.log(returnvalue.split('\n'))
});
