const express = require('express')
const router = express.Router()

const data = [
  {
    nama: "UMAM ALPARIZI",
    nim: "F1D02310141",
    hobbies: ["sepakbola", "catur"]
  },
  {
    nama: "BUDI SANTOSO",
    nim: "F1D023002",
    hobbies: ["membaca buku", "bermain game"]
  },
  {
    nama: "SITI AMINAH",
    nim: "F1D023003",
    hobbies: ["memasak", "menonton film"]
  },
  {
    nama: "AGUS SETIAWAN",
    nim: "F1D023004",
    hobbies: ["bermain musik", "mendaki gunung"]
  },
  {
    nama: "DEWI LESTARI",
    nim: "F1D023005",
    hobbies: ["menulis", "traveling"]
  },
  {
    nama: "EKO PRASETYO",
    nim: "F1D023006",
    hobbies: ["olahraga", "fotografi"]
  },
  {
    nama: "FITRI HANDAYANI",
    nim: "F1D023007",
    hobbies: ["berkebun", "yoga"]
  },
  {
    nama: "HENDRA WIJAYA",
    nim: "F1D023008",
    hobbies: ["memancing", "otomotif"]
  },
  {
    nama: "INDRA GUNAWAN",
    nim: "F1D023009",
    hobbies: ["bersepeda", "coding"]
  },
  {
    nama: "JOKO SUSILO",
    nim: "F1D023010",
    hobbies: ["bulu tangkis", "nonton anime"]
  },
  {
    nama: "LIA PURNAMA",
    nim: "F1D023011",
    hobbies: ["melukis", "mendengarkan musik"]
  },
  {
    nama: "MUHAMMAD ARIF",
    nim: "F1D023012",
    hobbies: ["futsal", "main game online"]
  },
  {
    nama: "NURUL HIDAYAH",
    nim: "F1D023013",
    hobbies: ["membaca novel", "belanja online"]
  },
  {
    nama: "RIZKI ANANDA",
    nim: "F1D023014",
    hobbies: ["desain grafis", "jogging"]
  },
  {
    nama: "SRI WAHYUNI",
    nim: "F1D023015",
    hobbies: ["menjahit", "menonton drama korea"]
  },
  {
    nama: "YUDI PRATAMA",
    nim: "F1D023016",
    hobbies: ["berenang", "streaming film"]
  }
]

router.get('/', (req, res) => {
  res.send(data)
})

router.get('/:nim', (req, res) => {
  const { nim } = req.params
  const result = data.find(e => e.nim === nim)

  if(!result) {
    return res.send({
      message: "Data tidak ditemukan!"
    })
  }

  res.send(result)
})

module.exports = router
