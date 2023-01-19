import AvatarPlaceHolder from '../../../assets/misc/avatar.png'
import Star from '../../../assets/misc/star-2.png'

const Tip = ({ type, ...rest }: { type: 'review' }) => {
  if (type === 'review') {
    return (
      <div className={`tip tip--review`}>
        <div className="tip__left">
          <img src={AvatarPlaceHolder} alt="avatar-placeholder" />
        </div>
        <div className="tip__right">
          <span className="content">this is the best thing !!</span>
          <div className="stars__wrapper">
            <img src={Star} alt="stars-wrapper" />
            <img src={Star} alt="stars-wrapper" />
            <img src={Star} alt="stars-wrapper" />
            <img src={Star} alt="stars-wrapper" />
            <img src={Star} alt="stars-wrapper" />
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Tip
