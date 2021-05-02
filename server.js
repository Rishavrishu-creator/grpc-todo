var grpc=require('grpc')
var protoLoader = require('@grpc/proto-loader')
var packageDef=protoLoader.loadSync("todo.proto",{})
var grpcObject=grpc.loadPackageDefinition(packageDef);
var todoPackage=grpcObject.todoPackage;


var server=new grpc.Server();
server.bind("0.0.0.0:40000",grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.Todo.service,{
      "createTodo":createTodo,
      "readTodos":readTodos,
      "readTodoStream":readTodoStream
})
var todos=[]

function readTodoStream()
{

}


function createTodo(call,callback)
{
    var todoItem = {
        "id":todos.length+1,
        "text":call.request.text
    }
todos.push(todoItem)
callback(null,todoItem)
}

function readTodos(call,callback){

    callback(null,{"items":todos})

}

server.start();



