import express from 'express'

const app = express()

app.get('/users')

app.listen(3002, () => {
    console.log('Сервер запущен!')
})

//https://youtu.be/sGlZDgnQqYw?t=2822
// Решить проблему с nodemon и продолжать дальше