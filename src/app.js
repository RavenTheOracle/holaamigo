import express from 'express';
import cors from 'cors';

const app = express();

// CORS Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Common Middleware
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));

//import routes 
import { healthcheckRouter } from './routes/healthcheck.routes.js';



//routes
app.use("/api/v1/healthcheck", healthcheckRouter)
export default app;