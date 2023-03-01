var express = require('express');
var app = express()

app.set('view engine' , 'ejs')



app.get('/:name' , (req,res)=>{
    data = {email : 'jainakshita779@gmailcom' , name :  'akshita'}
    console.log(req.params.name)
    res.render('home',{
        name : req.params.name,
        profile :  data
    })
})



app.listen('3000')