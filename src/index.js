const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log('Epress is running on port ', process.env.PORT)
})