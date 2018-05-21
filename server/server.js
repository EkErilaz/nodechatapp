const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
//check what is in variable PORT else port 3000
const express = require('express');

var app = express();

app.use(express.static(__dirname));
app.listen(3000, function(){
    console.log('server is up ${port}');
});
