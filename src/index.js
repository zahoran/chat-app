const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.on('inputChanged', (data) => {
        console.log(data)
        socket.emit('inputChanged', data)
    })
})

server.listen(process.env.PORT, () => {
    console.log('Epress is running on port ', process.env.PORT)
})