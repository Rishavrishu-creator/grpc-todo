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
    console.log("Receiverd from server"+JSON.stringify(response))
    }
    else{
        console.log(err)
    }
})


