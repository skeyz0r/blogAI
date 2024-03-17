const fs = require('fs')


function Write(data)
{
    if(data)
    {
    const dataString = JSON.stringify(data, null, 2);

    fs.writeFile('./minimalist.json', dataString, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          return;
        }
        console.log('Data has been written to data.json successfully.');
      }); 
    }
    else
    {
        fs.writeFile('./minimalist.json', '{}', (err) => {
            if (err) {
              console.error('An error occurred:', err);
              return;
            }
            console.log('Data has been written to data.json successfully.');
          }); 
    }
}

module.exports = Write