fs = require('fs');

function phoneNumber(err, data) {
    console.log('data: ', data);
 
}

fs.readdir('C:/', phoneNumber);


console.log('this comes after');
