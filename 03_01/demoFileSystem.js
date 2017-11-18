var data = require('./names.json');
console.log(data.names[0].name);

var fs = require('fs')
fs.readFile('./names.json','utf-8', function(err,data)
    {
        data = JSON.parse(data);
        for(var i=0; i< data.names.length; i++)
            {
                console.log("name is :: " + data.names[i].name);
            }
        
    }
)