import { model, Schema, Types } from 'mongoose'
import BoardModel from '../board/board.model'

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
    await BoardModel.findOneAndUpdate(
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

CategoryModel.pre('findOneAndDelete', async function (done) {
  const { boardID, _id } = this.getFilter()

  try {
    await BoardModel.findOneAndUpdate(
      { _id: boardID },
      {
        $pull: {
          categorys: _id,
        },
      }
    )
    done()
  } catch (error) {
    done(new Error('Error while creating the catgory'))
  }
})

export default model('category', CategoryModel)
