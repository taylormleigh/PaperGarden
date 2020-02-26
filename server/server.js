const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 4321;

app.use(express.static(path.join(__dirname, '/../client/dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//   db.addWorld((err, data) => {
//     res.send(data);
//   })
// });

app.post('/', (req, res) => {
  db.addWorld(req.body, (err, data) => {
    if (err) {
      console.error("--> zoinks: ", err);
    }
    res.send(data);
  })
});

app.listen(port, ()=> {console.log(`connected AF on port ${port}`)});