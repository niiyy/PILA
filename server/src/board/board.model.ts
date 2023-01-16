import mongoose, { model, Schema, Types } from 'mongoose'
import UserModel from '../user/user.model'

const BoardModel = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: Types.ObjectId,
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    categorys: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
      },
    ],
  },
  {
    timestamps: true,
  }
)

BoardModel.pre('findOneAndDelete', async function (done) {
  const _id = new Types.ObjectId(this.getFilter()._id)

  try {
    await UserModel.updateMany(
      {
        boards: _id,
      },
      {
        $pull: {
          boards: _id,
        },
      }
    )
    done()
  } catch (error) {
    done(new Error('cant delete the user board'))
  }
})
export default model('board', BoardModel)
