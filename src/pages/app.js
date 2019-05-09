import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout.js"
import Details from "../components/Details.js"
import Home from "../components/Home.js"
import Login from "../components/Login.js"
import PrivateRoute from "../components/PrivateRoute.js"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/details" component={Details} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
