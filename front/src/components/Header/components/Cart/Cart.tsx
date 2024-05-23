import {observer} from 'mobx-react-lite'
import {Link} from 'react-router-dom'
import {Product} from 'api/api'
import Button from 'components/Button'
import rootStore from 'stores/RootStore'
import styles from './Cart.module.scss'

const Cart=()=>{
  const products=rootStore.cart.products
  rootStore.cart.setIDsOfProductsInCartFromLocalStorage(["dwd"],()=>null)
  if(products===undefined||products.state!=='fulfilled') return <p>strange</p>
  return <>
    <input type="checkbox" id={styles.check}/>
    <label htmlFor={styles.check} className={styles.bag}>
      <div className={styles.productsList}>
        {products.value.filter((product) => product.status === 'fulfilled').map((product, i) => {
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