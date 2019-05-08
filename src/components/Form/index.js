import React from "react"
import styles from "./form.module.css"
import { navigate } from "@reach/router"

export default ({ handleSubmit, handleUpdate }) => (
  <form
    className={styles.form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/home`)
    }}
  >
    <label className={styles[`form__label`]}>
      Password
      <input
        className={styles[`form__input`]}
        type="text"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    <input className={styles[`form__button`]} type="submit" value="Log In" />
  </form>
)
