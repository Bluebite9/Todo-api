var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

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
    var a = _.findWhere(todos, {id: todoId});
    
    if(typeof a === 'undefined'){
        res.status(404).send();
    }else{
        res.json(a);
    }
})

app.post ('/todos', function (req, res) {
    var body = req.body;
    
    body = _.pick(body,'description','completed');
    
    if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0){
        return res.status(400).send();
    }
    
    body.description = body.description.trim();
    
    var id;
    body.id = todoNextId;
    todoNextId++;
    
    todos.push(body);
    
    res.json(todos);
})

app.delete('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var a = _.findWhere(todos, {id: todoId});
    
    if(a){
        todos = _.without(todos, a);
        res.json(a);
    } else {
        return res.status(400).send();
    }
})

app.listen(PORT, function() {
   console.log('Express listening on port ' + PORT + '!'); 
});