import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true}));

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
        () => {
            console.log("connected to db");
        }
);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('server is running on port 5000')
});