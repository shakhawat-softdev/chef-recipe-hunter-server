const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
   res.send('Chef recipe hunter is runnng')
})

app.get('/chefs', (req, res) => {
   res.send(chefs);
});

app.get('/details/:id', (req, res) => {
   const id = req.params.id;
   const details = chefs.filter(chef => chef.id == id)
   res.send(details);
});



app.listen(port, () => {
   console.log(`Chef recipe hunter is runnng on port ${port}`)
})