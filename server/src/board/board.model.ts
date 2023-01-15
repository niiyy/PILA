import { Schema, model } from 'mongoose'

const BoardModel = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    users: {
      type: Schema.Types.Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

export default model('board', BoardModel)
