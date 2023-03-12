import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from '../PasswordItems'
import './index.css'

const profilePicBackgroundColors = [
  'bg-blue',
  'bg-red',
  'bg-orange',
  'bg-purple',
  'bg-sky',
]

class PasswordManager extends Component {
  state = {passwordList: [], searchInputProvided: ''}

  clickToAddNewPassword = event => {
    event.preventDefault()
    const websiteInputEl = document.getElementById('websiteInput').value
    const usernameInputEl = document.getElementById('usernameInput').value
    const passwordInputEl = document.getElementById('passwordInput').value
    if (
      websiteInputEl !== '' &&
      usernameInputEl !== '' &&
      passwordInputEl !== ''
    ) {
      const randomIndex = Math.floor(
        Math.random() * profilePicBackgroundColors.length,
      )
      const profilePicColor = profilePicBackgroundColors[randomIndex]
      const newPasswordObject = {
        id: uuidv4(),
        website: websiteInputEl,
        username: usernameInputEl,
        password: passwordInputEl,
        isShowPassword: false,
        profilePicColor,
      }
      const {passwordList} = this.state
      const combineBothObjects = [...passwordList, newPasswordObject]
      this.setState({passwordList: combineBothObjects})
      document.getElementById('websiteInput').value = ''
      document.getElementById('usernameInput').value = ''
      document.getElementById('passwordInput').value = ''
    }
  }

  searchInputChange = event => {
    const eventValue = event.target.value
    this.setState({searchInputProvided: eventValue})
  }

  deletedParticularFromManager = uniqueId => {
    const {passwordList} = this.state
    const filterPasswordList = passwordList.filter(
      eachItem => eachItem.id !== uniqueId,
    )

    this.setState({passwordList: filterPasswordList})
  }

  changeShowPasswordStatus = () => {
    const {passwordList} = this.state
    const changedPasswordListStatus = passwordList.map(eachItem => ({
      ...eachItem,
      isShowPassword: !eachItem.isShowPassword,
    }))
    this.setState({passwordList: changedPasswordListStatus})
  }

  render() {
    const {passwordList, searchInputProvided} = this.state

    const filteredPasswordListWithSearch = passwordList.filter(eachItem =>
      eachItem.website
        .toLowerCase()
        .includes(searchInputProvided.toLowerCase()),
    )

    const isAnyItemStoredInList = filteredPasswordListWithSearch.length
    const displayListOrNoPassImg =
      isAnyItemStoredInList > 0 ? (
        <ul className="password-un-order-lists">
          {filteredPasswordListWithSearch.map(eachPassword => (
            <PasswordItems
              key={eachPassword.id}
              passwordItemsDetails={eachPassword}
              deletedParticularFromManager={this.deletedParticularFromManager}
            />
          ))}
        </ul>
      ) : (
        <div className="no-password-container">
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
            <h1 className="form-main-heading">Add New Password</h1>
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
            <button
              onClick={this.clickToAddNewPassword}
              className="submit-button-style"
              type="submit"
            >
              Add
            </button>
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
              <h1 className="form-main-heading">Your Passwords</h1>
              <p className="list-count-style">{isAnyItemStoredInList}</p>
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
                onChange={this.searchInputChange}
                className="input-element-style"
                id="searchInput"
                type="search"
                placeholder="Search"
              />
            </label>
          </div>
          <hr className="line-style" />
          <div className="show-password-container">
            <input
              onChange={this.changeShowPasswordStatus}
              className="input-checkbox-style"
              type="checkbox"
              id="checkBoxInput"
            />
            <label htmlFor="checkBoxInput">Show passwords</label>
          </div>
          {displayListOrNoPassImg}
        </section>
      </div>
    )
  }
}

export default PasswordManager
