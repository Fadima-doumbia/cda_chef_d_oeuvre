import { useState } from "react";

const SearchBar= (props) => {
    const [searchVal, setSearchVal] = useState('');
    
    const handleInput = (e) => {
      setSearchVal(e.target.value);
    }
    
    const handleClearBtn = () => {
      setSearchVal('');
    }
    
    const filteredProducts = props.products.filter((product) => {
      return product.includes(searchVal);
    });
    
    return (
      <div className='container'>
        <div className='input-wrap'>
          <i className="fas fa-search"></i>
          <label 
            for="product-search" 
            id="input-label"
          >
            Product Search
          </label>
          <input 
            onChange={handleInput}
            value={searchVal}
            type="text" 
            name="product-search" 
            id="product-search" 
            placeholder="Search Products"
          />
          <i 
            onClick={handleClearBtn}
            className="fas fa-times"
          ></i>
        </div>
        <div className="results-wrap">
          <ul>
            {filteredProducts.map((product) => {
              return <li key={product} className='list-item'>{product}</li>
              // return <li key={product} className='list-item'><a>{product}</a></li>
            })}
          </ul>
        </div>
      </div>
    );
  }
  export default SearchBar;
  