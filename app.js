import express, { request } from 'express';

const app = express()
const hostname = '127.0.0.1';
const PORT = 6942

app.get('/', (request, response) => {
    response.send("helloo this will be a landing page in the future")
  })

app.get('/about', (request, response) => {
    response.send("second page prob an about page")
  })


app.get('/articles/:id', (request, response) => {
    const articlesId = request.params.id
  
    response.send(`Wow this here: ${articlesId} is pretty cool now we need actual content for that `)
  })

app.post('/about',(request, response) => {
    response.send('thank you very much but this doesnt do anything yet')
  })

app.listen(PORT, () => {
  console.log(`👋 Started server on port ${PORT}`)
})