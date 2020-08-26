import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import data from './data.js';
import config from './config.js';
import userRouter from "./routes/userRouter";

mongoose.connect(
    config.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('DB CONNECTED');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use('/api/users', userRouter)
app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is runnning ...`)
})