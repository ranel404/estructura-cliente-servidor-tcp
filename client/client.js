let net = require('net')
const readline = require('readline'); 

const options = {
    port: 8000,
    host: '127.0.0.1'
}

const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexion satisfactoria!')
    client.write('Me conecte a tu servidor')
})

client.on('data',(data)=>{
    console.log('SERVER: ' + data)
    //sendLine()
})

client.on('error', (err)=> {
    console.log(err.message)
})


