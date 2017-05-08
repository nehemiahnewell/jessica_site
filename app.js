var http = require('http'),
    express = require('express'),
    app = express(),
    RED = require("node-red"),
    path = require("path");

var server = http.createServer(app);
app.use('/', express.static('public'));
RED.init(server, {
    uiPort: 1880,
    httpAdminRoot: '/system/admin',

    // Some nodes, such as HTTP In, can be used to listen for incoming http requests.
    // By default, these are served relative to '/'. The following property
    // can be used to specifiy a different root path. If set to false, this is
    // disabled.
    httpNodeRoot: '/',

    // The following property can be used in place of 'httpAdminRoot' and 'httpNodeRoot',
    // to apply the same root to both parts.
    //httpRoot: '/red',

    // When httpAdminRoot is used to move the UI to a different root path, the
    // following property can be used to identify a directory of static content
    // that should be served at http://localhost:1880/.
    httpStatic: __dirname + "/public",
    flowFile: 'jessica_site.json',
    flowFilePretty: true,
    userDir: path.join(__dirname, "flows"),
});

app.use("/system/admin",RED.httpAdmin);
app.use(RED.httpNode);
app.use(function(req, res) {res.sendFile(__dirname + '/public/index.html');});
server.listen(8080);
RED.start();