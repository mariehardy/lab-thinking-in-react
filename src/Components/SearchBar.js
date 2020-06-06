import React from 'react';

function SearchBar(props) {
  let searchHandler = (event) => {
    let inputValue = event.target.value;

    props.onSearchCallback(inputValue); // lifting the state up ..
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        onChange={searchHandler}
        value={props.currentSearchTerm}
      />
    </form>
  );
}

export default SearchBar;
