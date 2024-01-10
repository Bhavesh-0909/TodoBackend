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