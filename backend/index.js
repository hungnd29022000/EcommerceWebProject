const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000 // export PORT = 4000
app.listen(port,()=>{
    console.log(`Listening on port ${port}....`);
})