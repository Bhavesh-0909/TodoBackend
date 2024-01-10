const express = require('express');
const router = express.Router();

const {createTodo}= require('../controller/createTodo');
const {getTodos} = require('../controller/getTodo');
const {getTodo} = require('../controller/getTodo');
const {updateTodo} = require('../controller/updateTodo');

router.post('/createTodo', createTodo);
router.get('/getTodos', getTodos);
router.get('/getTodo/:id', getTodo);
router.put('/updateTodo/:id', updateTodo);

module.exports = router;