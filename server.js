var grpc=require('grpc')
var protoLoader = require('@grpc/proto-loader')
var packageDef=protoLoader.loadSync("todo.proto",{})
var grpcObject=grpc.loadPackageDefinition(packageDef);
var todoPackage=grpcObject.todoPackage;


var server=new grpc.server();
server.bind("0.0.0.0:40000",grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.Todo.service,{
      "creeateTodo":createTodo,
      "readTodos":readTodos
})
function createTodo(call,callback)
{
console.log(call)
}

function readTodos(call,callback){


}

server.start();



