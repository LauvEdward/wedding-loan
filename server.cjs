const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000
const distPath = path.join(__dirname, 'dist')

app.use(express.static(distPath))

// app.get('/wedding', (req, res) => {
//     res.sendFile(path.join(distPath, 'index.html'))
// })

// ✅ Dự phòng cho các route khác (React Router SPA)
app.get('/wedding', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})