import React from "react"
import { navigate } from "gatsby"
import Form from "./Home/Form.js"
import View from "./Home/View.js"
import { handleLogin, isLoggedIn } from "../utils/auth"

class Login extends React.Component {
  state = {
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/home`)
    }

    return (
      <View title="Log In">
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
      </View>
    )
  }
}

export default Login
