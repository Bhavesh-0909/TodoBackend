const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            require:true,
            maxLength:50,
        },
        description: {
            type:String,
            require:true,
            maxLength:50,
        },
        createdTodo: {
            type:Date,
            require:true,
            default:Date.now(),
        },
        updatedTodo: {
            type:Date,
            require:true,
            default:Date.now(),
        },
    }
);

module.exports = mongoose.model("Todo", TodoSchema);