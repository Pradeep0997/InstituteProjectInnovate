import express from 'express';
import { addExam, getAllExams } from '../controllers/examController.js';

const router = express.Router();

router.get('/getall', getAllExams);
router.post('/', addExam);

export default router;