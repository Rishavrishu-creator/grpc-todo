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
var todos=[]

function createTodo(call,callback)
{
    var todoItem = {
        "id":todos.length+1,
        "text":call.request.text
    }
todos.push(todoItem)

}

function readTodos(call,callback){


}

server.start();



