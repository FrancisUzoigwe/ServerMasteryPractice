import mongoose from 'mongoose';

interface iFrancis {
    name?: string;
    age?: number;
    email?: string;
    address?: string;
    hobby?: string;
}

interface iFrancis extends Document{}

const francisModel = new mongoose.Schema(
    {
        name : {type : String, required: [true, "A name must be initialised"]},
        age: {type: Number},
        email: {type: String, required: [true, "An email must be initialised"]},
        address: {type: String, required: [true, "An address must be initialised"]},
        hobby: {type: String,}
    }
)

export default mongoose.model<iFrancis>("francis", francisModel)