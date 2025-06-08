import { Exam } from '../models/examSchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';
export const addExam = async(req,res,next) => {
    console.log(req.body);
    const {name,registrationNumber,className, marks} = req.body;
    try{
        if(!name || !registrationNumber || !className || !marks){
            handleValidationError("Please fill all required fields of the form",400); 
        }
        await Exam.create({name, registrationNumber, className, marks});
        res.status(200).json({
            success: true,
            message: "A new Exam has been Created!",
            exam: {name, registrationNumber, className, marks} 
        })
    }catch(err){
        next(err)
    }
};


export const getAllExams = async(req,res,next)=>{
    try{
        const exams = await Exam.find();
        res.status(200).json({
            success: true,
            exams,
        })
    }catch(err){
        next(err)
    }
};