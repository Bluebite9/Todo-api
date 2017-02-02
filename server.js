var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Buna Mari!');
});

app.get('/todos', function(req, res) {
    res.json(todos); 
});

app.get('/todos/:id', function (req, res) {
    
    var todoId = parseInt(req.params.id, 10);
    var a;
    for(var i = 0; i < todos.length; i++){
        if(todoId === todos[i].id){
            a = todos[i];
        }  
    }
    if(typeof a === 'undefined'){
        res.status(404).send();
    }else{
        res.json(a);
    }
})

app.post ('/todos', function (req, res) {
    var body = req.body;
    var id;
    body.id = todoNextId;
    todoNextId++;
    
    todos.push(body);
    
    res.json(todos);
})

app.listen(PORT, function() {
   console.log('Express listening on port ' + PORT + '!'); 
});