// Imports
const express = require('express')
const app = express()
const port = 3100
// Static Files
app.use(express.static('public'));
app.set('views', 'public/views');
app.get('/', function(req, res ) {
    res.sendFile('index.html', { root: __dirname + '/public/views/' });
}); 
app.get('/home', function(req, res ) {
    res.sendFile('home.html', { root: __dirname + '/public/views/' });
}); 

app.listen(port, () => console.info(`App listening on port ${port}`))