const mongoose = require('mongoose')
const User = mongoose.model("User", new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    image: {
        type: String,
        default: 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png'
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }],
    books:[]
}));

module.exports = User