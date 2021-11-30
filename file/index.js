const path = require('path');
const fs = require('fs');

fs.readFile(path.dirname(__filename+'/index.js'), 'utf-8', (err, data)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(data)
})
