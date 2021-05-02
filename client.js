var grpc=require('grpc')
var protoLoader = require('@grpc/proto-loader')
var packageDef=protoLoader.loadSync("todo.proto",{})
var grpcObject=grpc.loadPackageDefinition(packageDef);
var todoPackage=grpcObject.todoPackage;

var client=new todoPackage.Todo("localhost:40000",grpc.credentials.createInsecure())

client.createTodo({
    "id":-1,
    "text":"Do Laundry"
},function(err,response){
    if(!err)
    {
    console.log("Received from server"+JSON.stringify(response))
    }
    else{
        console.log(err)
    }
})

var call = client.readTodosStream()
call.on("data",function(item){
    console.log("Received item from server"+JSON.stringify(item))
    
})

call.on("end",function(){
    console("Server done!!")
})
/*
client.readTodos({},function(err,response){
    if(!err)
    {
    console.log("Read Todos from server"+JSON.stringify(response))
    response.items.forEach(i=>{
        console.log(i.text)
    })
    }
    else{
        console.log(err)
    }
})
*/
