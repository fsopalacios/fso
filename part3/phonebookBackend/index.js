const express = require('express')
const app = express()
app.use(express.json())
const phones = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "asdf",
      "number": "asdf",
      "id": 5
    },
    {
      "name": "1111",
      "number": "3333",
      "id": 6
    }
  ]

app.get('/', (req, res) => {
    res.json({
        estado:true,
        mensaje:"phonebookBackend"
    })
})

app.get('/api/persons', (req, res) => {
    res.json(phones)
})

app.get('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const phone = phones.filter(p => p.id === id)
    res.json(phone)
})

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${phones.length} people<br/> ${new Date()}`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})