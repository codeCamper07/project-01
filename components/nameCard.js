import style from '../styles/Home.module.css'

const NameCard = () => {
  return (
    <div className={style.nameCard}>
      <div className={style.photoContainer}>
        <img src='/profile.jpeg' className={style.photo} alt='photo' />
      </div>
      <div>
        <h1 className={style.nameHeading}>Dommaraju Bhargav</h1>
      </div>
    </div>
  )
}
export default NameCard
