require('dotenv').config()
module.exports = {
   
    // HOST: "localhost", PORT: 27017, DB: "Nolingo_db"
    url: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.PASSWORD}@cluster0.jciocgb.mongodb.net/PhilippiLearning?retryWrites=true&w=majority`

    // url: `mongodb+srv://Melikhaya:password1234@cluster0.jciocgb.mongodb.net/PhilippiLearning?retryWrites=true&w=majority`
};