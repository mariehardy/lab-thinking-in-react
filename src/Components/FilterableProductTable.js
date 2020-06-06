import React, { Component } from 'react'

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  state = {
    products: this.props.products,
    searchTerm: "",
  }
  
  searchHandler = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm // "L" -> "La" 
    })
  }

  render() {

    return (
    <div className="App">
      <header className="App-header">
        <p>
          IronStore
        </p>
        </header>
        <main>
          <div><SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm} /></div>          
          <div>
            <ProductTable allProducts={this.state.products} currentSearchTerm={this.state.searchTerm} />
          </div>

        </main>
    </div>
  );
  }

}

export default FilterableProductTable;