import style from '../styles/Home.module.css'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TimelineIcon from '@mui/icons-material/Timeline'

const Sidebar = () => {
  return (
    <nav className={style.navHeader}>
      <ul className={style.navItems}>
        <a href='#'>
          <li className={style.sidemenuIcons}>
            <HomeIcon fontSize='medium' />
            Home
          </li>
        </a>
        <a href='#aboutme'>
          <li className={style.sidemenuIcons}>
            <AccountCircleIcon />
            About Me
          </li>
        </a>
        <a href='#skills'>
          <li className={style.sidemenuIcons}>
            <TimelineIcon />
            Skills
          </li>
        </a>
      </ul>
      <div>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>Socials</p>
        <ul className={style.navItems}>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/bhargavdommaraju/'>
            <li className={style.sidemenuIcons}>
              <LinkedInIcon />
              Linkdin
            </li>
          </a>
          <a target='_blank' href='https://github.com/codeCamper07'>
            <li className={style.sidemenuIcons}>
              <GitHubIcon />
              Github
            </li>
          </a>
        </ul>
      </div>
    </nav>
  )
}
export default Sidebar
