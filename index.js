const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT||5000;

app.use(cors())

const chefs = require('./data/chef.json');

app.get('/', (req, res) => {
  res.send('chef recipe hunder site!')
})
app.get('/chefs', (req, res) => {
    res.send(chefs)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})