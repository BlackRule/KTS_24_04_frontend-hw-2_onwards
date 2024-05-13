import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://195.46.171.236:3123/api/v1'
  // baseURL: 'https://api.escuelajs.co/api/v1'
})
export type Product = {
  category: Category,
  description: string,
  id: number,
  images: string[],
  price: number,
  title: string
}
export type Category = {
  id: number,
  name: string
}

export async function getProducts(category_id?: Category['id'], limit = -1) {
  const params: [string, object?] = category_id ?
    [`/categories/${category_id}/products`, {params: {limit: limit, offset: 0}}]
    :
    ['/products']
  return (await instance.get<Product[]>(...params)).data
}

export async function getProduct(id: string) {
  return (await instance.get<Product>(`/products/${id}`)).data
}

export async function getCategories() {
  const v = await instance.get<Category[]>('/categories')
  return v.data
}
