import {onAuthStateChanged} from 'firebase/auth'
import { useEffect } from 'react'
import {useLocalStorage} from 'usehooks-ts'
import {auth} from 'utils/firebase'
import rootStore from '../instance'
export const useCartStoreInit = (): void => {
  useEffect(() => onAuthStateChanged(auth, (user) => {
    rootStore.cart.setUser(user)
  }), [])
  const [IDsOfProductsInCart, setIDsOfProductsInCart] = useLocalStorage('IDsOfProductsInCart', [] as string[])
  useEffect(() =>  {
    rootStore.cart.setIDsOfProductsInCartFromLocalStorage(IDsOfProductsInCart,setIDsOfProductsInCart)
  }, [IDsOfProductsInCart,setIDsOfProductsInCart])
}
