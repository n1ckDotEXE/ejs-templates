const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/about', (req, res) => {
    res.render('about', {
      title: 'About this',
      special: 'Hot Garbage'
    });
   });
   

app.listen(PORT, () => {
    console.log('Running on http://localhost:${PORT}');
});