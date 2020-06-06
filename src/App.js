import React from 'react'
import './App.css';
import productDataObject from './data.json'

import FilterableProductTable from './Components/FilterableProductTable'

function App() {
    return (
        <div>
            <FilterableProductTable products={productDataObject.data} />
        </div>
    )
}

export default App
