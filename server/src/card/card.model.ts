import CategoryModel from '../category/category.model'
import { model, Schema, Types } from 'mongoose'

const CardModel = new Schema(
  {
    content: String,
    categoryID: { type: Types.ObjectId, ref: 'category' },
    chips: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

CardModel.pre('save', async function (done) {
  try {
    await CategoryModel.findOneAndUpdate(
      { _id: this.categoryID },
      {
        $push: {
          cards: this._id,
        },
      }
    )
    done()
  } catch (error) {
    done(new Error('Error while creating the catgory'))
  }
})

export default model('card', CardModel)
