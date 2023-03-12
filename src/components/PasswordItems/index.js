import './index.css'

const PasswordItems = props => {
  const {passwordItemsDetails, deletedParticularFromManager} = props
  const {
    id,
    website,
    username,
    password,
    profilePicColor,
    isShowPassword,
  } = passwordItemsDetails

  const whatsShowPasswordOrStar = isShowPassword ? (
    <p className="password-items-content">{password}</p>
  ) : (
    <img
      className="stars-style"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const deleteParticular = () => {
    deletedParticularFromManager(id)
  }

  return (
    <li className="password-item-container">
      <div className="container-contains-dp-and-details">
        <div className={`common-dp-container ${profilePicColor}`}>
          <p>{website[0]}</p>
        </div>
        <div className="item-content-container">
          <p className="password-items-content website-name-bold">{website}</p>
          <p className="password-items-content">{username}</p>
          {whatsShowPasswordOrStar}
        </div>
      </div>
      <button
        onClick={deleteParticular}
        className="delete-button"
        type="button"
        data-testid="delete"
      >
        <img
          className="delete-icon-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItems
