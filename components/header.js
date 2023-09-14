import { useState } from 'react'
import style from '../styles/Home.module.css'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone'

const Header = () => {
  const [menuActive, setmenuActive] = useState(false)

  const menuToggle = () => {
    setmenuActive(!menuActive)
  }
  return (
    <div className={style.Headers}>
      <div className={style.menu}>
        <img src='/ThomasMiller.png' alt='logo' className={style.logo} />
        <button
          className={style.navigationButton}
          style={{ backgroundColor: 'rgb(20, 19, 25)', border: '0px' }}
          onClick={menuToggle}>
          {menuActive ? <ClearTwoToneIcon /> : <MenuTwoToneIcon />}
        </button>
      </div>
      {menuActive ? (
        <nav>
          <ul style={{ listStyle: 'none', padding: '10px' }}>
            <a href='#'>
              <li>Home</li>
            </a>
            <a href='#aboutme'>
              <li>About me</li>
            </a>
            <a href='#skills'>
              <li>Skills</li>
            </a>
          </ul>
        </nav>
      ) : (
        ''
      )}
    </div>
  )
}
export default Header
