import mongoose from "mongoose";

const DBstring: string = process.env.APPLICATION_STRING!
export const francisDB = () => {
    mongoose.connect(DBstring).then(() => {
        console.log("DB connection established")
    })
}