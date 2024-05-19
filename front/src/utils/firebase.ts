import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import {User, onAuthStateChanged, createUserWithEmailAndPassword as createUserWithEmailAndPassword_, getAuth } from 'firebase/auth'
import { addDoc, collection , getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import {useEffect, useState} from 'react'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7oRYNMU5EYOGeYby6b4npLDvsTyGgxQA',
  appId: '1:1060409970714:web:27a44c50cec14f683201a3',
  authDomain: 'ecommerce-4e1a5.firebaseapp.com',
  measurementId: 'G-5YEKX2V553',
  messagingSenderId: '1060409970714',
  projectId: 'ecommerce-4e1a5',
  storageBucket: 'ecommerce-4e1a5.appspot.com'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const storage = getStorage()

// export const db = getDatabase(app)
export  const db = getFirestore(app)

export const auth = getAuth(app)

export default app

export const createUserWithEmailAndPassword=(email:string, password:string) => {
  return createUserWithEmailAndPassword_(auth, email, password).then(()=>addDoc(collection(db, 'users'), {}))
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        // ...
        console.log('uid', uid)
        setUser(user)
      } else {
        // User is signed out
        // ...
        console.log('user is logged out')
        setUser(null)
      }
    })
  }, [])
  return user
}