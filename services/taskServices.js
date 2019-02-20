const Task = require('../model/Task')

const createTask = task =>
    new Promise((resolve, reject) => {
        Task.create(task)
            .then(doc => {
                resolve({
                    status: 201,
                    doc,
                })
            })
            .catch(error => {
                reject(error)
            })
    })

const readTask = params =>
    new Promise((resolve, reject) => {
        Task.find(params)
            .then(docs => {
                if (docs.length === 0) {
                    return resolve({
                        status: 404,
                        docs,
                    })
                }
                resolve({
                    status: 200,
                    docs,
                })
            })
            .catch(error => {
                reject(error)
            })
    })

const updateTask = task =>
    new Promise((resolve, reject) => {
        Task.updateOne({ _id: task._id }, task)
            .then(doc => {
                resolve(doc)
            })
            .catch(error => {
                reject(error)
            })
    })

const deleteTask = taskId =>
    new Promise((resolve, reject) => {
        Task.deleteOne({ _id: taskId })
            .then(() => {
                resolve({
                    status: 204,
                    message: 'Tarefa excluída com sucesso',
                })
            })
            .catch(error => {
                reject(error)
            })
    })

module.exports = {
    createTask,
    readTask,
    updateTask,
    deleteTask,
}
