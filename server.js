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
    res.send('Salut Vladut!');
});

app.get('/todos', function(req, res) {
    res.json(todos); 
});

app.get('/todos/:id', function (req, res) {
    res.send('Asking for todo with if of ' + req.params.id)
})

app.listen(PORT, function() {
   console.log('Express listening on port ' + PORT + '!'); 
});