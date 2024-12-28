const express = require('express');
const app = express();
const db = require('./db.js');
// const Person = require('./models/Person.js');
const Menu = require('./models/MenuItem.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hellooo world');                 
});

//import router-menu files 
const menuRoutes = require('./routes/menuRoutes.js');
app.use('/menu',menuRoutes);

//Import router-person files
const personRoutes = require('./routes/personRoutes.js');
app.use('/person',personRoutes);


app.listen(8119)