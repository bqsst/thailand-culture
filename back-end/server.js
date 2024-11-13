const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const {readdirSync} = require('fs');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

readdirSync('./routes').map((r) => {
    if(r === 'auth.js'){
        app.use('/api/auth', require('./routes/' + r));
    }else{
        app.use('/api', require('./routes/' + r));
    }
})

app.listen(5000, () => console.log('Server is running on port 5000'));