const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('server up on that 3000 type shit')
})