import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('server is running on port 5000')
});