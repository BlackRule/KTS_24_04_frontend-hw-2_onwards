import {User} from 'firebase/auth'
import {addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query} from 'firebase/firestore'
import {action, autorun, makeAutoObservable, makeObservable, observable, reaction, runInAction} from 'mobx'
import {fromPromise, IPromiseBasedObservable} from 'mobx-utils'
import {getProduct, Product} from 'api/api'
import {db} from 'utils/firebase'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
if (!Object.prototype.hasOwnProperty.call(new class { // @ts-expect-error
  x }(), 'x')) throw new Error('Transpiler is not configured correctly');


type PrivateFields = '_user'|'_IDsOfProductsInCart'|'_IDsOfProductsInCartFromLocalStorage'|'_setIDsOfProductsInCartToLocalStorage'|'_IDsOfProductsInCartFromFirebase'

export default class CartStore {
  private _user: User | null = null
  products?:IPromiseBasedObservable<PromiseSettledResult<Product>[]>
  // private _IDsOfProductsInCart:string[]
  // private _IDsOfProductsInCartFromLocalStorage:string[]
  // private _IDsOfProductsInCartFromFirebase:string[]
  // private _setIDsOfProductsInCartToLocalStorage: ((value: (((prevState: string[]) => string[]) | string[])) => void)|null
  a:number
  constructor() {
    this.a=6
    makeObservable<CartStore>(this, {
      // _IDsOfProductsInCart: observable,
      // _IDsOfProductsInCartFromFirebase: observable,
      // _IDsOfProductsInCartFromLocalStorage: observable,
      // _setIDsOfProductsInCartToLocalStorage:observable,
      // _user: observable.ref,
      // setIDsOfProductsInCartFromLocalStorage: action,
      // setUser: action,
      a:observable
    })

  }
  destroy(): void {
    // this.reactiona()
  }
    private readonly __reaction = reaction(
    () => {
      console.log('__reaction expr',this.a)
      return this.a
    },
    (_IDsOfProductsInCartFromLocalStorage) => {
      console.log('__reaction', _IDsOfProductsInCartFromLocalStorage)
    }
  )
  /*private readonly _reaction = reaction(
    () => {
      console.log('_reaction expr',this._IDsOfProductsInCartFromLocalStorage)
      return this._IDsOfProductsInCartFromLocalStorage
    },
    (_IDsOfProductsInCartFromLocalStorage) => {
      console.log('_reaction', _IDsOfProductsInCartFromLocalStorage)
      this._IDsOfProductsInCart=_IDsOfProductsInCartFromLocalStorage
    }
  )*/
  /*    private readonly _reaction = reaction(
    () => [this._IDsOfProductsInCartFromLocalStorage,this._IDsOfProductsInCartFromFirebase],
    ([_IDsOfProductsInCartFromLocalStorage,_IDsOfProductsInCartFromFirebase]) => {
      console.log('_reaction', _IDsOfProductsInCartFromLocalStorage)
      this._IDsOfProductsInCart=_IDsOfProductsInCartFromLocalStorage
    }
  )*/
/*  private readonly _IDsOfProductsInCartReaction = reaction(
    () => this._IDsOfProductsInCart,
    (IDsOfProductsInCart) => {
      if (IDsOfProductsInCart.length===0) return
      console.log('_IDsOfProductsInCartReaction', IDsOfProductsInCart)
      const promises=[]
      for(const id of IDsOfProductsInCart) promises.push(getProduct(id))
      this.products=fromPromise(Promise.allSettled(promises))
    }
  )*/

 /* private readonly _userReaction = reaction(
    () => this._user,
    (user) => {
      if (user === null) return
      const q = query(collection(db, `users/${this._user?.uid}/cart`), orderBy('timestamp', 'desc'))

      onSnapshot(q, (snapshot) => {
        this._IDsOfProductsInCartFromFirebase=snapshot.docs.map(doc => doc.data().productId)
      // snapshot.docs.map(doc => console.log(doc))
      // console.log(snapshot.docs)
      })
    }
  )*/


  getUser() {
    return this._user
  }

  setUser(user: User | null) {
    this._user=user
  }

  addIDOfProductToCart(productId: string) {
    /*this._IDsOfProductsInCart.push(productId)
    if(!this._user&&this._setIDsOfProductsInCartToLocalStorage)this._setIDsOfProductsInCartToLocalStorage(this._IDsOfProductsInCart)
    else if(this._user) addDoc(collection(db, `users/${this._user.uid}/cart`), {productId})*/
  }

  setIDsOfProductsInCartFromLocalStorage(IDsOfProductsInCart: string[], setIDsOfProductsInCart: (value: (((prevState: string[]) => string[]) | string[])) => void) {
    runInAction(() => {
      this.a=Math.random()
      console.log('setIDsOfProductsInCartFromLocalStorage', IDsOfProductsInCart)
      // this._IDsOfProductsInCartFromLocalStorage=IDsOfProductsInCart
      // this._setIDsOfProductsInCartToLocalStorage=setIDsOfProductsInCart
    })
  }
}