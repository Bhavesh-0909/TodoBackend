const Todo = require('../models/TodoSchema')

const createTodo = async(req, res)=>{
    try{
        const {title, description} = req.body;
        const response = await Todo.create({title, description});
        res.status(200).json({
            success:true,
            data:response,
            message:"entry posted to DB"
        })
    }
    catch(err) {
        console.log(err);
        console.error(err)
        res.status(500).json({
            success:false,
            data: "internal server error",
            message:"entry posted to DB"
        })
    }
}