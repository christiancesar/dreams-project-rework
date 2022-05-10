import { stripe } from "./stripe";

export default class StripeFunctions {
  async product() {
    // const product = await stripe.products.create({
    //   name: 'Package Standard Edition',      
    // })
    
    // console.log(product);

    // const price = await stripe.prices.create({
    //   product: product.id,
    //   currency: 'BRL',
    //   unit_amount: 2000
    // })

    const productUp = await stripe.products.list({ids: ['prod_LatakyvD7GC8tT']})

    console.log(JSON.stringify(productUp.data[0] ,null, 2));
  }
}