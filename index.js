const express = require('express')
const booksRoute = require('./src/routes/books')
const sectionsRoute = require('./src/routes/sections')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(booksRoute)
app.use(sectionsRoute)

app.get("/",(req,res)=>{
    res.status(200).send("Ahadith API")
})
app.listen(port,()=>{
    console.log('Sever is up on port', port)
})


