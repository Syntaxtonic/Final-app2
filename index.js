const express = require("express");
const cors = require("cors");
const app = express();



var corsOptions = {
    origin: "http://localhost:8081" 
};

console.log("Hello WOrld")
app.use(cors());// parse requests of content-type - application/jsonapp.use(express.json());// parse requests of content-type -

app.use(express.json())
app.use(express.urlencoded({ extended: true }));// simple route
const db = require("./models");
const Role = db.role;
var dbConfig = require('./config/db.config');
db.mongoose
.connect(`${dbConfig.url}`, {
useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
console.log("Successfully Connected to MongoDB.");
initial();
})
.catch(err => {
console.error("Connection error", err);
process.exit();
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
    new Role({
    name: "user"}).save(err => {
        if (err) {
        console.log("error", err);
        }
        console.log("added 'user' to roles collection");
        });
        new Role({
        name: "moderator"
        }).save(err => {
        if (err) {
        console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
        });
        new Role({
        name: "admin"
        }).save(err => {
        if (err) {
        console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
        });
        }
    });
}



app.get("/", (req, res) => {
res.json({ message: "Welcome to Paul's Server you Dummy." });});// set port, listen for

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/book.routes')(app);
require('./routes/posts.routes')(app);
require('./routes/Booking.routes')(app)

const PORT = process.env.PORT || 8050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);});


    