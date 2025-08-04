import React, { use, useContext } from 'react'
import { ShopContext } from '../context/Shopcontext';

const Searchbar = () => {
    const { search, setsearch, showsearch, setshowsearch}=useContext(ShopContext);
    
  return showsearch ? (
    <div>



    </div>
  )
  : null
};

export default Searchbar;