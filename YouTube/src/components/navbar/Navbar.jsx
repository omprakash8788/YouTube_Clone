import './navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import Search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icom from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'



const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
     <div className='nav-left flex-div'>

        <img className='menu_icon' onClick={()=>setSidebar(prev=>prev===false? true: false)} src={menu_icon} alt="icon" />
       <Link to='/'><img className='logo' src={logo} alt="logo" /></Link> 
     </div>
     <div className="nav-middle flex-div">
      <div className="search-box flex-div">
       <input type="text" placeholder='Search' />
       <img src={Search_icon} alt="" />

      </div>
     </div>
      

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icom} alt="" />
        <img className='user_icon' src={profile_icon} alt="" />
      </div>
    </nav>
  )
}

export default Navbar
