import React from 'react';
import{Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import {useCombobox} from 'downshift';
import {Input} from 'antd';
import '../Css/banner.css';




const Banner =() =>{
  const [inputItems,setINputItems]=useState([])
  const [users,setUsers]=useState([])
  const [singleUser,setSingleUser]=useState('')
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => setUsers(data))  },[])

const{isOpen ,getMenuProps ,getInputProps ,highlightedIndex,getItemProps,getComboboxProps}=useCombobox({
  items:inputItems,
  onInputValueChange :({inputValue}) =>{
    setINputItems (
      users.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
    )
  },
})



    return(
<div className="banner">
  <div className="banner-info">
  <div className="container  mt-5">
  <div className="row">
       <div className="col-md-3">
        <div {...getComboboxProps()}>
      
      <input type="text" className="search-query form-control "  {...getInputProps()}
          placeholder="Search"
          enterButton="Search"
          size="large"  />
 </div>
 <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleUser(item.name)}
            >
              <li
                style={highlightedIndex === index ? { background: "#1a30b8" } : {}}
              >
                <h4>{item.name}</h4>
              </li>
            </span>
          ))}
      </ul>
        
       </div>
       <div className="col-md-3">
         <select class="form-control" id="exampleFormControlSelect1">
         <option>Tunisia</option>
         <option>France</option>
         <option>Algérie</option>
         <option>4</option>
         <option>5</option>
        </select>
      </div>
      

      <div className="col-md-3">
        <select class="form-control " id="exampleFormControlSelect1">
        <option>Tunisia</option>
        <option>France</option>
        <option>Algérie</option>
        <option>4</option>
        <option>5</option>
        </select>
      </div>
        
        <div className="col-md-3">
        <Button className="btn w-70" >Search Expert</Button>
        </div>
    </div>
</div>
 </div>
 </div>

      
         
         
        
       
    )
}
export default Banner; 