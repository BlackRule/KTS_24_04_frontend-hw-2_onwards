import {useEffect, useState} from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import * as PostService from 'api/ProductService'
import {Product as ProductModel} from 'api/ProductService'
import PagePadding from 'components/PagePadding/PagePadding'
import Product from './components/Product/Product'
import RelatedItems from './components/RelatedItems/RelatedItems'

const ProductPage = () => {
  const URLparams = useParams() as unknown as { id: string | undefined }
  const [product, setProduct] = useState<ProductModel>()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (URLparams.id===undefined) navigate('/')
    else
      PostService.getProduct(URLparams.id).then((response)=>setProduct(response.data))

  },[location])
  return (
    <PagePadding>
      {product ?<>
        <Product product={product}/>
        <RelatedItems category={product.category}/>
      </>: null}
    </PagePadding>
  )
}
export default ProductPage