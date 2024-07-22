import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

// Routes
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
});

// Middleware
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// Serve static files from the React app
const __dirname = path.resolve();  // To get the current directory in ES6 modules
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
