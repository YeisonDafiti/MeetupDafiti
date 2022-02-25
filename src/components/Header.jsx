import React, { useState, useRef } from "react";

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false);
  const [search, setSearch] = useState('');

  const searchInput = useRef(null);

  const handleClick = () => {
    setChangeBackground(!changeBackground);
    document.querySelector("body").style.background = changeBackground ? "white" : "black";
  }

  const handleSearch = () => {
    setSearch(searchInput.current.value)
  }

  /*const handleSearch = event => {
    setSearch(event.target.value)
  }*/

  return (
    <div className="Header py-3">
      <h1 style={{ color: changeBackground ? "white" : "black" }}>ReactHooks</h1>
      <button 
      type="button" 
      className="btn btn-dark" 
      onClick={handleClick}
      >{changeBackground ? 'DarkMode' : 'LightMode'}
      </button>
      <div className="my-3">
          <input ref={searchInput} type="text" value={search} onChange={handleSearch}/>
          <hr />
          <p style={{ color: changeBackground ? "white" : "black"}}>El texto se imprime aqui: --- <b>{search}</b> --- </p>
      </div>
    </div>
  );
};

export default Header;
