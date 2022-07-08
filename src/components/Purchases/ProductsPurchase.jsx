import React from 'react'

const ProductsPurchase = ({product}) => {

  console.log(product)

  return (
    <section>
      <h4> Nombre del Producto: {product.title}</h4>
      <p>Cantidad: {product.productsInCart.quantity}</p>
      <p>$ {product.price}</p>
    </section>
  )
}

export default ProductsPurchase