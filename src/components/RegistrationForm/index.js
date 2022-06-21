import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstnameInput: '',
    lastnameInput: '',
    firstNameError: false,
    secondNameError: false,
    isFormSubmitted: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstnameInput, lastnameInput} = this.state
    if (firstnameInput.length === 0) {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }

    if (lastnameInput.length === 0) {
      this.setState({secondNameError: true})
    } else {
      this.setState({secondNameError: false})
    }

    if (firstnameInput.length !== 0 && lastnameInput.length !== 0) {
      this.setState({isFormSubmitted: true})
    }
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target
    console.log(value.length)
    this.setState({firstnameInput: value})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target
    this.setState({lastnameInput: value})
  }

  onBlurFirstName = () => {
    const {firstnameInput} = this.state
    if (firstnameInput.length === 0) {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  renderFirstNameField = () => {
    const {firstnameInput, firstNameError} = this.state
    const error = firstNameError ? 'type-box error-display' : 'type-box'

    return (
      <>
        <label className="label-name" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className={error}
          placeholder="First name"
          value={firstnameInput}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameError && <p className="error-message">Required</p>}
      </>
    )
  }

  onBlurLastName = () => {
    const {lastnameInput} = this.state
    if (lastnameInput.length === 0) {
      this.setState({secondNameError: true})
    } else {
      this.setState({secondNameError: false})
    }
  }

  renderSecondNameField = () => {
    const {lastnameInput, secondNameError} = this.state
    const error = secondNameError ? 'type-box error-display' : 'type-box'

    return (
      <>
        <label className="label-name" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={error}
          placeholder="Last name"
          value={lastnameInput}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {secondNameError && <p className="error-message">Required</p>}
      </>
    )
  }

  onClickButton = () => {
    this.setState({
      isFormSubmitted: false,
      firstnameInput: '',
      lastnameInput: '',
    })
  }

  renderSuccessForm = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-logo"
      />
      <p className="success-message">Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickButton}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          {isFormSubmitted ? (
            this.renderSuccessForm()
          ) : (
            <>
              <div className="username-container">
                {this.renderFirstNameField()}
              </div>
              <div className="password-container">
                {this.renderSecondNameField()}
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
