if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}
const express=require('express')
const app=express()
const expressLayouts=require('express-ejs-layouts')
//use for input post information
const bodyParser=require('body-parser')

const indexRouter=require('./routes/index')
const authorRouter=require('./routes/authors')
const bookRouter=require('./routes/books')

//set up ejs as view engine
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
//use for input post information
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))

//set up connection with mongoose
 const mongoose= require('mongoose')
 mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology: true})
//check mongoose connect or not
const db=mongoose.connection
db.on('error', error=>console.error(error))
db.on('open', ()=>console.log('Connected to mongoose'))

app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)

app.listen(process.env.PORT || 3000)
