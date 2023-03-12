import './index.css'

const profilePicBackgroundColors = [
  'bg-blue',
  'bg-red',
  'bg-orange',
  'bg-purple',
]

const PasswordItems = props => {
  const {passwordItemsDetails} = props
  const {website, username, password} = passwordItemsDetails

  const randomIndex = Math.floor(
    Math.random() * profilePicBackgroundColors.length,
  )
  const profilePicColor = profilePicBackgroundColors[randomIndex]

  return (
    <div className="password-item-container">
      <div className={profilePicColor}>
        <p>{website[0]}</p>
      </div>
      <div className="item-content-container">
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <button type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </div>
  )
}

export default PasswordItems
