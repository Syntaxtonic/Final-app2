const db = require('../models')
const User = db.user

exports.allAccess = (req, res) => {
        res.status(200).send("Public Content.");
    };
exports.userBoard = (req, res) => {
        res.status(200).send("User Content.");
    };
exports.adminBoard = (req, res) => {
        res.status(200).send("Admin Content.");
    };
exports.moderatorBoard = (req, res) => {
        res.status(200).send("Moderator Content.")
    ;};

exports.booking = (req, res) => {
    const id = req.params.id

    User.findById(req.userId)
        .then(data => {
            if(!data.books.includes(id)){
                data.updateOne({ $push: { books: id }})
                    .then(() => {
                        res.status(200).send({ msg: "You have placed your booking for this book."})
                    }).then(res => {
                        console.log(res)
                    })
                    
                        .catch(err => res.status(500).send({ msg: err.message }))
            } else {
                data.updateOne({ $pull: { books: id }})
                    .then(() => res.status(200).send({ msg: "You unbooked this book."}))
                        .catch(err => res.status(500).send({ msg: err.message }))
            }
        })
}

exports.getUser = (req, res) => {
    const id = req.params.id

    User.findById(id)
        .then(data => {
            if(!data) res.status(404).send({ msg: "There is something wrong retreiving the "+ id})
            else res.status(200).send(data)
        }).catch(err => res.status(500).send({ msg: err.message }))
}

exports.findAllUsers = (req, res) => {
    User.find()
        .then(data => res.status(200).send(data))
            .catch(err => res.status(500).send({ msg: err.message }))
}