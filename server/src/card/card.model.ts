import { model, Schema } from 'mongoose'

const CardModel = new Schema(
  {
    title: String,
    description: {
      type: String,
      default: '',
    },
    chips: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

export default model('card', CardModel)
