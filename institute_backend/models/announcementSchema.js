import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    announcementSchema: {
        type: String,
        required: true
    },
});

export const Announcement = mongoose.model('Announcement', announcementSchema);