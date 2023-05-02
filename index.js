const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT||5000;

app.use(cors())

const chefs = require('./data/chef.json');
const recipes = require('./data/recipes.json')

app.get('/', (req, res) => {
  res.send('chef recipe hunder site!')
})
app.get('/chefs', (req, res) => {
    res.send(chefs)
  })
  app.get('/recipes',(req,res)=>{
    res.send(recipes);
  })

  app.get('/recipes/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const selectRecipes = recipes.find(n=>n._id === id)
    res.send(selectRecipes);
  })
  
  app.get('/chefs/:id',(req,res)=>{
    const id = (req.params.id);
    console.log(id);
   
    
      const catagoriRecipes = recipes.filter(n=>(n.ctg_id) ==id)
      res.send( catagoriRecipes );
    
    
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})