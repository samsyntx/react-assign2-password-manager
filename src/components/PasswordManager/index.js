import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from '../PasswordItems'
import './index.css'

const passwordList = []

// {
//     id: uuidv4(),
//     website: 'amazon.in',
//     username: 'amazon19',
//     password: 'amazon@1996',
//     isPasswordDisplay: false,
//   },

class PasswordManager extends Component {
  render() {
    const isAnyItemStoredInList = passwordList.length
    const displayListOrNoPassImg =
      isAnyItemStoredInList > 0 ? (
        <ul>
          {passwordList.map(eachPassword => (
            <PasswordItems
              key={eachPassword.id}
              passwordItemsDetails={eachPassword}
            />
          ))}
        </ul>
      ) : (
        <div>
          <img
            className="no-password-img"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <p className="no-password-text">No Passwords</p>
        </div>
      )

    return (
      <div className="main-password-manager-body">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <section className="add-new-password-complete-container">
          <div className="container-for-password-manager-img-small">
            <img
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
          <form className="form-container">
            <p className="form-main-heading">Add New Password</p>
            <label
              className="input-element-label-design"
              htmlFor="websiteInput"
            >
              <div className="input-icons-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
              </div>
              <input
                className="input-element-style"
                id="websiteInput"
                type="text"
                placeholder="Enter Website"
              />
            </label>
            <br />
            <label
              className="input-element-label-design"
              htmlFor="usernameInput"
            >
              <div className="input-icons-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
              </div>
              <input
                className="input-element-style"
                id="usernameInput"
                type="text"
                placeholder="Enter Username"
              />
            </label>
            <br />
            <label
              className="input-element-label-design"
              htmlFor="passwordInput"
            >
              <div className="input-icons-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
              </div>
              <input
                className="input-element-style"
                id="passwordInput"
                type="password"
                placeholder="Enter Password"
              />
            </label>
          </form>
          <div className="container-for-password-manager-img-large">
            <img
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </section>
        <section className="password-component-bottom-section">
          <div className="your-password-heading-container-with-search-box">
            <div className="your-password-and-counts">
              <p className="form-main-heading">Your Passwords</p>
              <p className="list-count-style">0</p>
            </div>
            <label className="input-element-label-design" htmlFor="searchInput">
              <div className="input-icons-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
              </div>
              <input
                className="input-element-style"
                id="searchInput"
                type="password"
                placeholder="Enter Password"
              />
            </label>
          </div>
          <hr className="line-style" />
          <div className="show-password-container">
            <label htmlFor="checkBoxInput">
              <input className="input-checkbox-style" type="checkbox" />
              Show Password
            </label>
          </div>
          {displayListOrNoPassImg}
        </section>
      </div>
    )
  }
}

export default PasswordManager
