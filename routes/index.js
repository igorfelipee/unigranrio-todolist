const express = require('express')
const router = express.Router()
const taskService = require('../services/taskServices')

router.post('/', function(req, res) {
    const createTask = taskService.createTask(req.body)

    createTask
        .then(response => {
            res.status(response.status)
                .type('json')
                .send(response.doc)
        })
        .catch(error => {
            res.status(500)
                .type('json')
                .send(error)
        })
})

router.get('/', function(req, res) {
    const readTask = taskService.readTask(req.query)

    readTask
        .then(response => {
            res.status(response.status)
                .type('json')
                .send(response.docs)
        })
        .catch(error => {
            res.status(500)
                .type('json')
                .send(error)
        })
})

router.put('/', function(req, res) {
    const updateTask = taskService.updateTask(req.body)

    updateTask
        .then(response => {
            res.status(200)
                .type('json')
                .send(response)
        })
        .catch(error => {
            res.status(500)
                .type('json')
                .send(error)
        })
})

router.delete('/:id', function(req, res) {
    const deleteTask = taskService.deleteTask(req.params.id)

    deleteTask
        .then(response => {
            res.status(response.status)
                .type('json')
                .send(response)
        })
        .catch(error => {
            res.status(500)
                .type('json')
                .send(error)
        })
})

module.exports = router
