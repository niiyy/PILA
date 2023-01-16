import { model, Schema, Types } from 'mongoose'
import PasswordService from '../services/password.service'

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
    boards: [
      {
        type: Types.ObjectId,
        ref: 'board',
      },
    ],
  },
  {
    timestamps: true,
  }
)
UserModel.pre('save', async function (done) {
  await PasswordService.crypte(this)
  done()
})

export default model('user', UserModel)
