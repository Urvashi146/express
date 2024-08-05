
// const express = require("express");
//  const app = express();

// //  const port = process.env.PORT || 3000;


//  app.get("/",(req,res)=> {

//     res.send("hi i am alive")



//  })

//  const start = async () => {

//     try{
//         app.listen(port, () => {
//             console.log(`${port} yes i am connected`)
//         })
        
//     }
//     catch{
    
//         console.log("Error==>",error)
    
//     }
//  }
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)