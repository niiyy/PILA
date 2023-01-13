import { Schema, model } from 'mongoose'

const BoardModel = new Schema(
  {
    title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default model('board', BoardModel)
