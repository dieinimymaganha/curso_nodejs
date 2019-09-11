import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
  name: String,
  email: String,
  password: String
}

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    maxlength: 80,
    minlength: 3
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: true
  }
})
export const User = mongoose.model<User>('User', userSchema)
