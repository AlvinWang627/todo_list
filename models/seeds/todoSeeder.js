const mongoose = require('mongoose')
const Todo = require('../todo') // 載入 todo model
const MONGODB_RUL = process.env.MONGODB_RUL || 'mongodb://localhost/todo-list'

mongoose.connect(MONGODB_RUL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: 'name-' + i})
  }
  console.log('done')
})