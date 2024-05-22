import { signOut } from 'firebase/auth'
import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'components/Button'
import {auth, useUser} from 'utils/firebase'
import styles from './User.module.scss'
import {translation} from "utils/translation";

const User=()=> {
  const language='en'
  const user = useUser()
  const navigate = useNavigate()
  const handleLogout = useCallback(
    () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        console.log('Signed out successfully')
      }).catch((error) => {
        // An error happened.
      })
    },
    [navigate],
  )
  return <nav className={styles.nav}>
    {user === null ?  <Button onClick={()=>
      navigate('/login')}>
            {translation[language].login}
    </Button> :
      <Button onClick={handleLogout}>
          {translation[language].logout}
      </Button>}
  </nav>
}

export default User