import { Alert } from '@mui/material'
import {signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import React, {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Button from 'components/Button'
import Input from 'components/Input'
import {auth, createUserWithEmailAndPassword} from 'utils/firebase'
import {translation} from 'utils/translation'
import styles from './LoginSignup.module.scss'

const LoginSignup = (props:{type:'signIn'|'signUp'}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const language='en'
  const [error, setError] = useState<null|string>(null)
  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    let r
    switch(props.type) {
    case 'signIn':
      r=signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          navigate('/')
        })
      break
    case 'signUp':
      r=createUserWithEmailAndPassword(email, password).then(() => {
        navigate('/login')
      })
    }
    r.catch((error_) => {
      switch (error_.code) {
      case 'auth/invalid-login-credentials':
        setError(translation[language]['auth/invalid-login-credentials'])
        break
      case 'auth/email-already-in-use':
        setError(translation[language]['auth/email-already-in-use'])
        break
      default:
        setError(error_.message)
        break
      }
    })

  }
  const sendEmail = async () => {
    auth.languageCode = language
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(translation[language]['password_reset_email_sent'])
      })
      .catch((error) => {
        setError(translation[language]['auth/invalid-login-credentials'])
      })
  }
  return (
    <>
      <main className={styles.main}>
        <form className={styles.form}>
          <Input
            placeholder={translation[language].email}
            name="email"
            required
            type="email"
            onChange={(v) => setEmail(v)}
            value={email}/>
          {/* helperText="Incorrect entry." todo */ }
          {/* error todo */}
          <Input
            placeholder={translation[language].password}
            name="password"
            required
            type="password"
            onChange={(v) => setPassword(v)}
            value={password}/>
          {error!==null?<Alert severity="error">{error}</Alert>:null}
          <Button onClick={submit}>
            {translation[language][props.type==='signUp'?'signUp':'login']}
          </Button>
        </form>
        {props.type==='signIn'? <><p>
          {translation[language].noAcc}
          {' '}
          <NavLink to="/signup">
            {translation[language].signUp}
          </NavLink>
        </p><p>
          {translation[language].forgot_password}
          {' '}
          <Button onClick={sendEmail}>
            {translation[language].send_password_reset_email}
          </Button>
        </p></> :
          <p>
            {translation[language].haveAcc}
            {' '}
            <NavLink to="/login">
              {translation[language].login}
            </NavLink>
          </p>
        }
      </main>
    </>
  )
}

export default LoginSignup