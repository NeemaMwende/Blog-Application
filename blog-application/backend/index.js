import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

mongoose.connect(
    process.env.MONGO_URI,
    // { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
    console.log("db connected");
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
