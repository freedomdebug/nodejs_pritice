/**
 * Created by tommy.hu on 15-12-13.
 */
var http = require('http');
server = http.createServer(function (req, res) {
    res.writeHeader(200, {"Content-Type": "text/plain"});
    res.end("Hello World\n");
});
server.listen(8000);
console.log("httpd start @8000");