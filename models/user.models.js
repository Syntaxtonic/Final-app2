const mongoose = require('mongoose')
const User = mongoose.model("User", new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    image: {
        type: String,
        default: 'https://i.postimg.cc/15S5NhS4/profile-removebg-preview.png'
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }],
    books:[]
}));

module.exports = User