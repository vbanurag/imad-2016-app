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
            <li><h3>Graduation<h3> :  Keshav mahavidalaya
            <li><h3>Post Graduation<h3> :  JIMS 
            <li><h3>Post Doc<h3> :  IIT Delhi 
        </ol>
        `
    
};

function createTemplate(data)
{
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var title = data.title;
    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name = "viewport" content = "width=device-width, intial-scale=1"/>
             <link href = "/ui/style.css" rel = "stylesheet"/>
        </head>
        
        <body>
            <div class = "container">
                <div>
                    <a href ="/">Home</a>
                </div>
                <div>
                    <h3>
                        ${heading}
                    </h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/bio', function (req, res) {
  res.send(createTemplate(articleone));
});

var names =[];
app.get('/submit-names/:name', function (req,res) {
    var name = req.params.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
});

var counter=0;
app.get('/counter', function(req, res)
{
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
