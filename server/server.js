const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

//Import tasks routes from tasks.js
const tasksRoutes = require('./tasks');
app.use('/api/tasks', tasksRoutes);

//test route to confirm the server is running.
app.get('/', (req, res)=>{
    res.send('Server is running!');
});

//start the server
app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
});