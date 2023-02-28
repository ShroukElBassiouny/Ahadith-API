# Ahadith API
A NodeJS API with a remote database which is allowed users to get all Ahadith in two versions (Arabic / English) and deployed to render.com from 7 books:
- Sunan Abu Dawud
- "Sahih al Bukhari
- "Sunan Ibn Majah
- "Muwatta Malik
- "Sahih Muslim
- "Sunan an Nasai
- "Jami At Tirmidhi
## URL: https://ahadith-api.onrender.com 
## Features:
- (Arabic / English) version
- Show Random hadith 
- Show all ahadith about specific subject
## Tools 
hadith API uses several tools to work properly:
- Express node.js web application framework
- remote database : MongoDB Atlas cloud
- mongoDBCompass
- postman
## Endpoints:
  ### Arabic version:
| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/ara/home` | Home page |
| `GET`   | `/:bookName` | Show All Ahadith of book by it's name: (ara-abudawud - ara-bukhari - ara-ibnmajah - ara-malik - ara-muslim - ara-nasai - ara-tirmidhi ) |
| `GET`    | `/ara/random` | Show random hadith |
| `GET`  | `/:bookName/sections` |Show All sections of book by it's name |
| `GET`   | `/:book/section/:section` | Show All Ahadith of section in book by book name and number of section |
  ### English version:
| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/eng/home` | Home page |
| `GET`   | `/:bookName` | Show All Ahadith of book by it's name: (eng-abudawud - eng-bukhari - eng-ibnmajah - eng-malik - eng-muslim - eng-nasai - eng-tirmidhi ) |
| `GET`    | `/eng/random` | Show random hadith |
| `GET`  | `/:bookName/sections` |Show All sections of book by it's name |
| `GET`   | `/:book/section/:section` | Show All Ahadith of section in book by book name and number of section |
## Enviromental Variables Set up:
- create a `.env` file in your root folder then copy the content from  `Sample.env and replace the values with your environment configuration / secrets`
```sh
PORT=3000
MONGO_DB="mongodb+srv://Ahadith:123456789Shr@cluster0.qxvkzqw.mongodb.net/Ahadith"
MONGO_DB_NAME="Ahadith"
```
## DataBase:
start mongoDBCompass and choose connect DB:
- put value of MONGO_DB key:
```sh
mongodb+srv://Ahadith:123456789Shr@cluster0.qxvkzqw.mongodb.net/Ahadith
```
- click connect and save
## Dataset from [here](https://github.com/fawazahmed0/hadith-api/tree/1/editions) and customized
## to build node_modules:
```sh
npm i
```
## to start server:
```sh
npm run start
```

