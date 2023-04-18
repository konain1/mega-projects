import logo from "./../../../logo.png"
import {ImSearch} from "react-icons/im" 
import { AiOutlineFilter } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from "react";
import Listing from "../../Category/Category";
import Category from "../../Category/Category";


function Header() {


const [searchingList,setSearchingList] = useState()

const [listShow,setListShow]= useState([]);
const [filterTab,setfilterTab] = useState(false)

const HandleList=()=>{

  setListShow(searchingList)
  setfilterTab(!filterTab)
  console.log(listShow + "-->")
}
 
  return (
    <div>
      <nav className='header'>
        <img src={logo} alt="logo"/>
        <div>
            <Link to="/">Tv Shows</Link>
            
            <Link to="/">Movies</Link>

            <Link to="/">Recently Added</Link>

            <Link to="/">MyList</Link>

          
          <div>
           
          </div>
        </div>
        
     
        
        <AiOutlineFilter className="filterbtn" onClick={HandleList}/>

        <input  onChange={(e)=>setSearchingList(e.target.value)}/>

        <ImSearch className="imsearch"/>
       
        
        
       
       
      </nav>

      <Category list={filterTab} />
    </div>
  )
}

export default Header

