var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './dist/',
    port: 8000,
    name: 'g-projet',   // optional, will set "X-Powered-by" HTTP header
    cors: '*',                // optional, defaults to undefined
    followSymlink: true, 
});
server.start(function(){
    console.log('server started at port', server.port);
});