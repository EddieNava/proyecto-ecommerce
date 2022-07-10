import React, {useState} from 'react'
import {
    DropdownItem,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Button,
} from "reactstrap";

import {Link, useNavigate} from "react-router-dom";

const Filter = () => {
  const [dropdown, setDropdown] = useState(false);
  
  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  
  const navigate = useNavigate();
  const clickCard = e => {
    const typeSelected = e.target.textContent
    navigate(`/category/${typeSelected}`)
  } 
  
    return (
    <div className='filterSec'> 
      <p>Filter by Category</p>
        <Dropdown className='filterCat' isOpen={dropdown} toggle={openCloseDropdown}>
           <DropdownToggle className='filter'>Categories <i class="fa-solid fa-arrow-down-short-wide"></i></DropdownToggle>
              <DropdownMenu>
                 <DropdownItem onClick={clickCard}>Smartphones</DropdownItem>
                 <DropdownItem onClick={clickCard}>Smart TV</DropdownItem>
                 <DropdownItem onClick={clickCard}>Computers</DropdownItem>
              </DropdownMenu>
        </Dropdown>
        <Link className='allPro' to={"/"}>See all products</Link>
          
        
    </div>
  )
}

export default Filter