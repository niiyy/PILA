import { model, Schema, Types } from 'mongoose'
import boardModel from '../board/board.model'

const CategoryModel = new Schema(
  {
    title: String,
    boardID: { type: Types.ObjectId, ref: 'board' },
    cards: [
      {
        type: Types.ObjectId,
        ref: 'card',
      },
    ],
  },
  {
    timestamps: true,
  }
)

CategoryModel.pre('save', async function (done) {
  try {
    await boardModel.findOneAndUpdate(
      { _id: this.boardID },
      {
        $push: {
          categorys: this._id,
        },
      }
    )
    done()
  } catch (error) {
    done(new Error('Error while creating the catgory'))
  }
})

export default model('category', CategoryModel)
