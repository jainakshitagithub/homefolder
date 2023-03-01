require('dotenv').config()
const express = require('express')
const app = express()

const stripe = require('stripe')
app.use(express.json())

app.get('/' , (req,res)=>{
    res.send('Hello world')
})

app.post('/payments' , (res,res)=>{
    const {product , token} = req.body
    console.log('product' , product);
    console.log('token' , token)

    const indempotencykey = uuid()
    return stripe.customers.create({
        email : token.email,
        source : token.id
    }).then(customers =>{
        stripe.charges.create({
            amount : product.price * 100 ,
            currency : 'usd',
            customer : customer.id,
            receipt_email : token.email,
            description : `purchase of ${product.name}`,
            shipping :{
                name : token.card.name,
                address :{
                    country : token.card.address_country
                }
            }
        }, {indempotencykey})
    }).then(result => res.status(200).json(result))
    .catch(e=>{console.log(e)})

})

app.listen(3000 ,()=>{console.log('Listening at port 3000')} )