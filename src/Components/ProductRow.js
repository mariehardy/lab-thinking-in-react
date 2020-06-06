import React from 'react';

function ProductRow(props) {
  return (
    <tr>
    <td>{props.productName}</td>
    <td>{props.productPrice}</td>
    </tr>
  )
}

export default ProductRow;
