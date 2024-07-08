import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

//routes
import authRoute from '../backend/routes/auth.js';
import postRoute from '../backend/routes/posts.js';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

mongoose.connect(
    process.env.MONGO_URI,
    // { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
    console.log("database connected");
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
});

//Middleware
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
