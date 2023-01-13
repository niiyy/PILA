import { NextFunction } from 'express'
import { Schema, model } from 'mongoose'
import PasswordService from '../services/password.service'
import { User } from '../types/user'

const UserModel = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    boards: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)
UserModel.pre('save', async function (next) {
  await PasswordService.crypte(this)
  next()
})
export default model('user', UserModel)
