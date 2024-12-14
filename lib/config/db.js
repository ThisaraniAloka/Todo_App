import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://thisaranialoka7:thisarani11636@cluster0.6o4b0.mongodb.net/todo-app');
    console.log("DB Connected")
}