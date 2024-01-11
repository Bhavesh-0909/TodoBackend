const Todo = require('../models/TodoSchema');

exports.deleteTodo = async(req, res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete({_id:id})
        res.status(200)
        .json({
            data:todo,
        })
    }
    catch(err){
        res.status(500)
        .json({
            data:err.message,
        })
    }
}