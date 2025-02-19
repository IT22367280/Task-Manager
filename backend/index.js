const express = require('express');
const connectDB = require('./config/DB'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


connectDB();


app.use(cors());
app.use(bodyParser.json()); 


app.use('/api/tasks', require('./routes/tasks')); 
app.use('/api/auth', require('./routes/user')); 

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
