import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import studentRouter from './routers/studentRouter.js';
import eventsRouter from './routers/eventsRouter.js';
import announcementRouter from './routers/announcementRouter.js';
import assignmentRouter from './routers/assignmentRouter.js';
import classRouter from './routers/classRouter.js';
import teacherRouter from './routers/teacherRouter.js';
import attendanceRouter from './routers/attendanceRouter.js';
import examRouter from './routers/examRouter.js';
import libraryRouter from './routers/libraryRouter.js';

import { dbConnection } from './database/dbConnection.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
config({ path: './config/config.env' });

// ✅ Enable CORS
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/announcements', announcementRouter);
app.use('/api/v1/assignments', assignmentRouter);
app.use('/api/v1/class', classRouter);
app.use('/api/v1/teachers', teacherRouter);
app.use('/api/v1/attendance', attendanceRouter);
app.use('/api/v1/exams', examRouter);
app.use('/api/v1/library', libraryRouter);

// ✅ Error handler should be last
app.use(errorHandler);

dbConnection();

export default app;
