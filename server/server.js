let net = require('net')
const readline = require('readline');

let server = net.createServer()


server.on('connection',(socket)=>{
    socket.on('data',(data)=>{
        console.log('\nMensaje recibido desde CLIENT: ' + data)
        socket.write('Mensaje Recibido')
    })

    socket.on('close',()=>{
        console.log('Comunicacion finalizada')
    })

    socket.on('error', ()=>{
        console.log(err.message)
    })
})

server.listen(8000,()=>{
    console.log('Servidor escuchando en el puerto: ' + server.address().port)
})