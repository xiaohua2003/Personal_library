const express=require('express')
const router=express.Router()
// All Authors Route
router.get('/', (req, res)=>{
    res.render('authors/index')
})

//New Author Route
router.get('/new', (req, res)=>{
    res.render('authors/new')
})
//Create Author Router
router.post('/new', (req, res)=>{
    res.send('Create')
})
module.exports=router