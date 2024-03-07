import './index.css'

const stateConstants = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {status} = props
  console.log(status)
  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p>
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in lovewith the art form
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="register-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  switch (status) {
    case stateConstants.registered:
      return renderRegistered()
    case stateConstants.yetToRegister:
      return renderYetToRegister()
    case stateConstants.registrationClosed:
      return renderRegistrationClosed()
    default:
      return <p>Click on an event, to view its registration details</p>
  }
}
export default ActiveEventRegistrationDetails
