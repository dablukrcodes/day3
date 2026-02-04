const express = require("express")

const app = express()
app.use(express.json())

const note = []

app.post("/notes", (req,res) =>{ 
    console.log(req.body)
    note.push(req.body)

//   console.log(note)

    res.send("create note")
})


app.get("/notes" , (req,res) =>{
    res.send(note)
})

app.delete("/notes/:index" , (req,res)=>{ 
    // console.log(req.params.index)

    delete note [req.params.index]
    res.send("note delete successfully")
})


app.patch("/notes/:index" , (req,res)=>{ 
    note[req.params.index].description = req.body.description
    res.send("note update successfully")
})

module.exports =app