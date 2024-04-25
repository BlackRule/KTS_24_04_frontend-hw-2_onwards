import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://195.46.171.236:3123/api/v1'
})
export type Product = {
    'category': Category,
    'description': string,
    'id': number,
    'images': string[],
    'price': number,
    'title': string
  }
export type Category = {
    id:number,
    name:string
}

export async function getProducts(category_id?:Category['id'],limit=-1){
  if(category_id)
    return  instance.get<Product[]>(`/categories/${category_id}/products`,
      {
        params: {limit: limit,offset:0}
      })
  return  instance.get<Product[]>('/products')
}
export async function getProduct(id: string){
  return  instance.get<Product>(`/products/${id}`)
}
export async function getCategories(){
  const v=  instance.get<Category[]>('/categories')
  return v
}
