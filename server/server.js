const express = require('express');
const app = express();
const port = 3333;
const db = require('../database/index.js')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//post request with an array
app.post('/plusTotalCount', (req, res) => {
  // console.log(req.body);
  req.body.map((item) => {

    db.plusTotalCount(item, (err, data) => {
      if (err) { console.error("server zoinks")}
      // res.send(data);
    })

  })
});


//post request with an item
app.post('/newReading', (req, res) => {
  // console.log(req.body);
    db.newReading(req.body, (err, data) => {
      if (err) { console.error("server zoinks")}
      // res.send(data);
    })

});

//get request
app.get('/getCards', (req, res) => {
  
  db.getCards((err, data) => {
      if (err) { 
        console.error("server zoinks")
      } else {
      // console.log(data);
      res.send(data);
      }

  })
});

//get request that takes in information
app.get('/getSingleReading', (req, res) => {
  // console.log(req.body);
  db.getSingleReading(req.body.id, (err, data) => {
    
      if (err) { console.error("server zoinks")}
      // console.log(data);
      res.send(data);

  })
});


app.listen(port, ()=> {console.log(`connected AF on port ${port}`)});

