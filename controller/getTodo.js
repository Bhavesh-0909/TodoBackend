const Todo = require('../models/TodoSchema');

exports.getTodos = async(req, res) => {
    try{
        const todos = await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
        })
        
    }
    catch(err){
        res.status(500)
        .json({
            success:false,
            data:err.message,
        })
    }
}

exports.getTodo = async(req, res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})
        res.status(200)
        .json({
            data:todo,
        })
    }
    catch(err){
        res.status(500)
        .json({
            success:false,
            data:err.message,
        })
    }
}