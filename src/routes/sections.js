const express = require('express')
const route = new express.Router()
const {client} = require('../db/mongodb')

// Arabic version : (ara-abudawud - ara-bukhari - ara-ibnmajah - ara-malik - ara-muslim - ara-nasai - ara-tirmidhi )
//ُ English version : (eng-abudawud - eng-bukhari - eng-ibnmajah - eng-malik - eng-muslim - eng-nasai - eng-tirmidhi )

//get All sections of book
route.get('/:bookName/sections',async( req , res)=>{
    try{
        const bookName =  req.params.bookName
        const book = client.db(process.env.MONGO_DB_NAME).collection("sections").find({book: bookName})
        const sections = await book.toArray()
        res.status(201).send(sections[0].sections)
    }catch(e){
        res.status(400).send(e)
    }
})
//get All Ahadith of section in book
route.get('/:book/section/:section',async( req , res)=>{
    try{
        const book = req.params.book
        const section = parseInt(req.params.section)
        const books = client.db(process.env.MONGO_DB_NAME).collection(book).find({"reference.book": section}).project({_id: 0})
        const ahadiths = await books.toArray()
        res.status(201).send(ahadiths)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = route