const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();

app.use(cors());
const url = "mongodb+srv://xppp1802:asWQ7KOpVaQAkYny@xppp0.cvuspii.mongodb.net/?retryWrites=true&w=majority&appName=XPPP0"
// const url = "mongodb+srv://asWQ7KOpVaQAkYny:xpp1802@xppp0.cvuspii.mongodb.net/?retryWrites=true&w=majority&appName=XPPP0";
mongoose.connect(url);
const con = mongoose.connection;

app.use(express.json());

try {
    con.on('open', () => {
        console.log('Connected to the database');
    })
} catch (error) {

    console.log("Error: " + error);
}

const port = 9000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

// const router= require("./routes/products");
// app.use('/products',router)





