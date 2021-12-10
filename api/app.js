const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`)); 

// Test GET route
app.get('/test', (req, res) => { 
  res.send({ test: "response from api" }); 
}); 