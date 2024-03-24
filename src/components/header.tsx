import video from '../assets/nftbg.mp4'
import { NavLink } from "react-router-dom";

import '../header.scss'
function header() {
    const navbarItems = [
        { id: 1, name: "Home" },
        { id: 2, name: "About" },
        { id: 3, name: "Artist" },
        { id: 4, name: "Roadmap" },
        { id: 5, name: "Team" },
        { id: 6, name: "Marketplace" },
        { id: 7, name: "Connect Wallet" }
      ];

  return (
    <>
      <div className="Header_main_Container">
<div className='Header_inner_Container'>

<div className="videoContainer">
    <video autoPlay muted loop className="video">
    <source src={video} type="video/mp4" />
      </video>
      </div>

      
      <div className="content">
    <div className='inner_Container'>
    <div className='logo'><img src="imgs/logo.png" alt="" /></div>

    <div className='nav_item_container'>

    {navbarItems.map((navItem:any)=>{
        return(
        <NavLink key={navItem.id}  to={`${navItem.id}`}
        className={({ isActive, isPending }:any) =>
        isPending ? "pending" : isActive ? "active_nav_item_names" : "nav_item_names"
      }>{navItem.name}</NavLink>
        )
    })}
    </div>

   

    </div>


    {/*Generate-AiSection */}
   <div className='Generate-AiSection'>
    <p className='Generate-AiSection_heading'>Generate with AI,
Scan, Mint, Sell
& Trade</p>
<p>Explore 3dotlink, where Web3 meets cultural legacy, and <br /> AI breathes life into NFTs</p>
<button>Buy NFT’S</button>
   </div>
      </div>




</div>
    </div>


    <div className='straight_line'>

    </div>


    
    </>
  
// {/* <>
// <div className='VidoeCotnainer'>

//   <video src={video}></video>
// </div>

// </> */}


  )
}

export default header