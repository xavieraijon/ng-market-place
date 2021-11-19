export interface Product {
  id: number,
  name: string,
  description: string,
  price: {
    original: number
  },
  features: Array<string>,
  image: string
}
