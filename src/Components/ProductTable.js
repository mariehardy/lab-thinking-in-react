import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {

    let filteredProduct = props.allProducts.filter((el) => el.name.toLowerCase().includes(props.currentSearchTerm.toLowerCase()))

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>

        {filteredProduct.map((el) => <ProductRow key={el.name} productName={el.name} productPrice={el.price} />)}


    {/* {props.allProducts.map((el) => <ProductRow key={el.name} productName={el.name} productPrice={el.price} />)} */}
      </tbody>
    </table>
  );
}

export default ProductTable;
