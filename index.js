const express = require('express')
const profileRouter = require('./routes/profile')
const { tambah } = require('./utils/math')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.send({
    nama: 'UMAM ALPARIZI',
    nim: 'F1D02310141',
  })
})

app.get('/hitung', (req, res) => {
  res.send({
    message: 'Menjumlahkan 10 + 10',
    hasil: tambah(10, 10)
  })
})

app.use('/profile', profileRouter)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
