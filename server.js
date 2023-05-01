const express= require("express")       
const app= express();

const http= require('http').createServer(app);


const PORT=process.env.port || 3000;

http.listen(PORT,()=>{
    console.log(`Server running at Port : ${PORT}`)
}) 
 
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
       res.sendFile(__dirname +'/index.html')
})


//Socket


const io= require('socket.io')(http);

io.on('connection',(socket)=>{
    console.log("connected");

})
