import { ELEMENT_IDS } from 'utils/config/keys'

export default function useClickLoginButton() {
  const handleClickLogin = () => {
    const loginButton = document.getElementById(ELEMENT_IDS.LOGIN_BUTTON_ID)
    if (!loginButton) return
    loginButton.click()
  }
  return handleClickLogin
}
