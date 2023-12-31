const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
morgan.token('body', req => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())
app.use(cors())
let phones = [
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

app.post('/api/persons', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ 
          error: 'name missing' 
        })
    }
    if (!req.body.number) {
        return res.status(400).json({ 
          error: 'number missing' 
        })
    }
    const filtered = phones.filter(p => p.name === req.body.name)
    if (filtered.length > 0) {
        return res.status(400).json({ 
            error: 'name must be unique' 
        })
    }
    const newPerson = (req.body)
    const idGenerator = () => {
        let id = Math.floor(Math.random() * 1000)
        let filtered = phones.filter(p => p.id === id)
        if(filtered.length > 0){
            idGenerator()
        } else {
            newPerson.id = id
            phones.push(newPerson)
            res.json(newPerson)
        }
    }
    idGenerator()
})

app.delete('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    phones = phones.filter(note => note.id !== id)
    res.status(204).end()
  })

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${phones.length} people<br/> ${new Date()}`)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})