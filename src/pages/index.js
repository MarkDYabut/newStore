import React from "react"
import View from "../components/View"
import { Link } from "gatsby"

import "../components/bootstrap.min.css"
import "../components/layout.css"

const Index = () => (
  <View title="">
    <h1>You must be 19 Years or older to purchase from this site.</h1>
    <Link to="/app/login">I understand</Link>.
  </View>
)

export default Index
