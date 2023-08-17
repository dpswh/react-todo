
const express = require('express');
const app = express();
const cors = require('cors'); 

const port = 3001;

app.use(cors());

// Provide example data as an API endpoint
app.get('/', function(req, res){
  const exampleTodos = [
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Complete project' },
    { id: 3, task: 'Fuck Carlo' },
    // Add more example todos as needed
  ];
  res.json(exampleTodos);
});

app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});