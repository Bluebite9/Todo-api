var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'Brush teeth',
    completed: true
}];

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

app.listen(PORT, function() {
   console.log('Express listening on port ' + PORT + '!'); 
});