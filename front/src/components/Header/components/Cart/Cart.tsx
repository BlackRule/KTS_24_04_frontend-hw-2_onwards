import {observer} from 'mobx-react-lite'
import {useEffect, useId} from 'react'
import {Link} from 'react-router-dom'
import {useLocalStorage} from 'usehooks-ts'
import {Product} from 'api/api'
import {ProductsFromIdsStore} from 'stores/stores'
import {useLocalStore} from 'utils/useLocalStore'
import styles from './Cart.module.scss'
import Button from "components/Button";

const Cart=()=>{
  const productsStore = useLocalStore(() => new ProductsFromIdsStore())
  const [productsToAddProductToCart, setProductsToAddProductToCart] = useLocalStorage('productsToAddProductToCart', [] as string[])
  useEffect(() => {
    productsStore.get(productsToAddProductToCart)
  },[productsToAddProductToCart,productsStore])
  if(productsStore.products===undefined||productsStore.products.state!=='fulfilled') return <p>strange</p>
  return <>
    <input type="checkbox" id={styles.check}/>
    <label htmlFor={styles.check} className={styles.bag}>
      <div className={styles.productsList}>
        {productsStore.products.value.filter((product) => product.status === 'fulfilled').map((product, i) => {
          const p = (product as PromiseFulfilledResult<Product>).value
          return <div key={i}>{p.title}</div>
        })}
        <Button>Buy</Button>
      </div>
      <label htmlFor={styles.check} className={styles.close}></label>
    </label>

  </>
}
export default observer(Cart)