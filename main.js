const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000  // Vercel uses dynamic port

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.get('/watch', (req, res) => {
  res.render('watch')
})
app.get('/live', (req, res) => {
  res.render('live')
})
app.get('/shop', (req, res) => {
  res.render('shop')
})

app.listen(port, () => {
  console.log(`Peaky Blinders listening on port ${port}`)
})
