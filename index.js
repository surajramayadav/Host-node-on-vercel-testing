const express = require('express')
const app = express();
app.get('/',(req,res)=>{
    res.send("hii")
})
app.listen(5000, () => {
    console.log(`server is working on http://localhost:5000}`)
})
