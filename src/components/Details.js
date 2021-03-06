import React from "react"
import View from "./Home/View.js"
import { getCurrentUser } from "../utils/auth"
import Status from "./Home/Status.js"

const Details = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <View title="Your Details">
      <Status />

      <ul>
        <li>Preferred name: {name}</li>
        <li>Legal name: {legalName}</li>
        <li>Email address: {email}</li>
      </ul>
    </View>
  )
}

export default Details
