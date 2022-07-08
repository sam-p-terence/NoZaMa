// const express = require('express')
// const cors = require('cors')

// const app = express()

// app.use(express.json())
// app.use(cors())

// const {
//     getBooks,
//     createBooks
// } = require('./controller')

// app.get("/api/books", getBooks);
// app.post("/api/books", createBooks)


// app.listen(4004, () => console.log(`running on 4004`))

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getAlbums,
    createAlbums
} = require('./controller')

app.get("/api/albums", getAlbums);
app.post("/api/albums", createAlbums)


app.listen(4004, () => console.log(`running on 4004`))

const port = process.env.PORT || 4004