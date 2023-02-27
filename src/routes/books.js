const express = require('express')
const route = new express.Router()
const {client} = require('../db/mongodb')

// Arabic version : (ara-abudawud - ara-bukhari - ara-ibnmajah - ara-malik - ara-muslim - ara-nasai - ara-tirmidhi )
//ُ English version : (eng-abudawud - eng-bukhari - eng-ibnmajah - eng-malik - eng-muslim - eng-nasai - eng-tirmidhi )
 

// home page: 

route.get('/:version/home',async( req , res)=>{
    try{
        const version = req.params.version
        const book = client.db(process.env.MONGO_DB_NAME).collection("books").find({version: version})
        const books = await book.toArray()
        res.status(201).send(books[0].books)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

//get All Ahdith of every book :

route.get('/:bookName',async( req , res)=>{
    try{
        const bookName = req.params.bookName
        const book = client.db(process.env.MONGO_DB_NAME).collection(bookName).find().project({_id: 0})
        const books = await book.toArray()
        res.status(201).send(books)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

//get random arabic hadith :

route.get('/ara/random',async( req , res)=>{
    try{
        const book = client.db(process.env.MONGO_DB_NAME).collection("ara-bukhari").aggregate([ { $sample: { size: 1 } } ])
        const hadith = await book.toArray()
        res.status(201).send(hadith[0].text)
    }catch(e){
        res.status(400).send(e)
    }
})

//get random eng-hadith:

route.get('/eng/random',async( req , res)=>{
    try{
        const book = client.db(process.env.MONGO_DB_NAME).collection("eng-bukhari").aggregate( [ { $sample: { size: 1 } } ])
        const hadith = await book.toArray()
        res.status(201).send(hadith[0].text)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = route
