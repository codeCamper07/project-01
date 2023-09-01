import Cards from './cards'
import style from '../styles/Home.module.css'

const ProjectList = [
  {
    name: 'FoodMunch website',
    image: '/FM.png',
    stack: 'HTML, CSS, Bootstrap',
    link: 'https://bhargavd.ccbp.tech',
  },
  {
    name: 'Todo Application',
    image: '/Todo.png',
    stack: 'HTML, CSS, JS, Bootstrap',
    link: 'https://bhargavd1.ccbp.tech',
  },
  {
    name: 'Wikipedia Search Application',
    image: '/Wiki.png',
    stack: 'HTML, CSS, JS, REST API Calls, Bootstrap',
    link: 'https://bhargavd2.ccbp.tech',
  },
  {
    name: 'NxtTrends Application',
    image: '/nxt.png',
    stack: 'React JS, JWT, Cookies, REST API Calls, JSX',
    link: 'https://db1.ccbp.tech/login',
  },
]

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className={style.cardContainer}>
        {ProjectList.map((Item, i) => (
          <Cards list={Item} key={i} />
        ))}
      </div>
    </div>
  )
}
export default Projects
