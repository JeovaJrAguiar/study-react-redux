import React from "react";
import products from '../../data/products'
import './ProductsList.css'

export default props => {
    const prods = products.map((product, i) => {
        return (
            <tr className={ i % 2 == 0 ? 'Par' :  ''} key={product.id} >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {prods}
                </tbody>
                
            </table>
        </div>
    )
}