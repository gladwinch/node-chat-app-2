const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

let app = express()
let port = process.env.PORT || 3000
let server = http.createServer(app)
let io = socketIO(server)

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected 12')

    socket.on('disconnect', () => {
        console.log('User was disconnected')
    })
})

server.listen(port, () => {
    console.log(`server is started on port ${port}`)
})


