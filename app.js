
const bodyParser = require('body-parser');
const express = require('express');
const routes=require('./routes/route');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);

app.listen(5000, ()=>{
    console.log('server running pn http://localhost:5000');
})

