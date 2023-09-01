import style from '../styles/Home.module.css'

const Cards = (props) => {
  const { list } = props
  const { name, link, image } = list
  return (
    <a href={link} target='_blank'>
      <div className={style.cards}>
        <img src={image} alt='project-image' className={style.images} />
        <div className={style.cardContent}>
          <p>{name}</p>
        </div>
      </div>
    </a>
  )
}
export default Cards
