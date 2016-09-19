var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
        title: 'bio | Anurag Sharma | Entrepreneur',
        heading: 'timeline',
        date: '12-Sep-2016',
        content: `
        <h3>Academics<h3>
        <ol>
            <li><h3>Graduation<h3> : <p> Keshav mahavidalaya</p>
            <li><h3>Post Graduation<h3> : <p> JIMS </p>
            <li><h3>Post Doc<h3> : <p> IIT Delhi </p>
        </ol>
        `
    
};

function createTemplate(data)
{
    var htmlTemplate = `
        <html>
        <head>
            <title>
        
            </title>
        </head>
        <meta name = "viewport" content = "width=device-width, intial-scale=1"/>
        <link href = "/ui/style.css" rel = "stylesheet"/>
        </html>
    `;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
