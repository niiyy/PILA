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

CardModel.pre('findOneAndDelete', async function (done) {
  const _id = this.getFilter()._id
  const categoryID = this.getFilter().categoryID

  try {
    await CategoryModel.findOneAndUpdate(
      {
        ca: _id,
      },
      {
        $pull: {
          cards: _id,
        },
      }
    )
    done()
  } catch (error) {
    done(new Error('cant delete the user board'))
  }
})

export default model('card', CardModel)
