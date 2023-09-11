import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react"
import navStyle from './NavBar.module.css'

const NavBar = () => {
    const [open ,setOpen] = useState(false)

    const handleMenu = ( ) => setOpen(!open)
  return (
  <div className={navStyle.container}>
    <div className={navStyle.navCon}>
        <div className={navStyle.logo}>
            <Link to={"/"}><h1>Welcome</h1></Link>
        </div>
        <div className={open ? `${navStyle.menu} ${navStyle.active}` : navStyle.menu}>
            <ul>
                <li><Link to={"/register"} >register</Link></li>
                <li><Link to={"/login"} >login</Link></li>
            </ul>
        </div>
        <div className={navStyle.mobileMenu} onClick={handleMenu}>
            {open ? <CloseIcon/> : <MenuIcon/>}
        </div>
    </div>
  </div>
  )
}

export default NavBar