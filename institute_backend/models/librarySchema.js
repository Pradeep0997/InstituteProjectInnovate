import mongoose from "mongoose";
import validator from "validator";

const librarySchema = new mongoose.Schema({

    bookName: {
        type: String,
        required: true
       
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
});

export const Library = mongoose.model("Library", librarySchema);