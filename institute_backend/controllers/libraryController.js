import { Library } from '../models/librarySchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';
export const createBook = async(req,res,next) => {
    console.log(req.body);
    const { bookname, author } = req.body;
    try{
        if(!bookname || !author){
            handleValidationError("Please fill all required fields of the form",400); 
        }
        await Library.create({bookname, author});
        res.status(200).json({
            success: true,
            message: "A new Book is Created!",
            book: { bookname, author }
        })
    }catch(err){
        next(err)
    }
};


export const getAllBooks = async(req,res,next)=>{
    try{
        const books = await Library.find();
        res.status(200).json({
            success: true,
            books,
        })
    }catch(err){
        next(err)
    }
};