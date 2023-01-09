// import { Schema, model } from 'mongoose'
// import { User } from '../types/user'

// const UserModel = new Schema(
//   {
//     username: {
//       type: String,
//       maxlength: 30,
//       minlength: 4,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//       lowercase: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       max: 1024,
//       minlength: 6,
//     },
//     boards: {
//       type: Array,
//       default: [],
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

// export default model('user', UserModel)

import { Schema, model } from 'mongoose'
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

export default model('user', UserModel)
