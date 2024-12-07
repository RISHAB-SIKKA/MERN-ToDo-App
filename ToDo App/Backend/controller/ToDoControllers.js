const ToDoModels = require("../models/ToDoModels");
// const todoModel = require("../models/ToDoModels");

module.exports.getToDo = async(req,res)=>{
    const toDo = await ToDoModels.find()
    res.send(toDo);
}

module.exports.saveToDo = async (req,res) =>{
    const {text} = req.body
    ToDoModels
    .create({text})
    .then((data) =>{
        console.log("Added Successfully");
        console.log(data);
        res.send(data);
    })
}

module.exports.updateToDo = async (req,res) => {
    const{id,text} = req.body;
    ToDoModels
    .findByIdAndUpdate(_id,{text})
    .then(() => res.set(201).send("Updated Successfully......"))
    .catch((err)=>console.log(err))
}
module.exports.deleteToDo = async (req,res) => {
    const{_id} = req.body;
    ToDoModels
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully......"))
    .catch((err)=>console.log(err))
}

