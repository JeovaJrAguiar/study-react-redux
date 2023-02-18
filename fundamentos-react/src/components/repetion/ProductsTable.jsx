import React from "react";
import products from '../../data/products'

export default props => {
    const prods = products.map((product) => {
        return (
            <li key={product.id}>
                {product.id} - {product.name} - R$ {product.price}
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle:'none'}}>
                {prods}
            </ul>
        </div>
    )
}