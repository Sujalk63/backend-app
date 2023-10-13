// import  express  from "express"; this line WONT WORK will show error if used  //new way of wrtting OR const express = require('express') 

//the above would give error because in js there are 2 ways to import common js and module js, the above is module js, sometimes we have to bring the file synchronously and sometimes asynchronously, if you have to use common js you have to use require method and the codes comes there syncronously but using import method which is module method brings code asynchronously
// however we can fix this issue of module js not working by just wrtting the type in json file as "type": module, and now the js will understand to assemble, bring the codes and handle them in modules but not in common js 

import  express  from "express";


const app = express(); // now will be able to leverage express using variable app

// setting up port

const port = process.env.PORT || 3000; //look for environment variable value if not the deafult is 3000

// basic of getting a request and sending response

app.get('/', (req, res)=>{
    res.send('server is ready')
});

// get a lsit of 5 jokes

app.get('/api/jokes', (req, res)=>{ //in /api for standarization which is usally done in industries also used for proxy
    const jokes = [  //array of objects
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'B joke',
            content: 'This is B joke'
        },
        {
            id: 3,
            title: 'C joke',
            content: 'This is C joke'
        },
        {
            id: 4,
            title: 'D joke',
            content: 'This is D joke'
        },
        {
            id: 5,
            title: 'E joke',
            content: 'This is E joke'
        }
    ];
    res.send(jokes)
});



// listening the requests

app.listen(port, ()=>{
    console.log(`server running at port: ${port}`);
})






// to run, write in the terminal "npm run start" 
// the whole above code is for backend now i have to consume it on frontend.




