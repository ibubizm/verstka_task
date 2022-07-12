import './navbar.scss'
import arrowImg from '../../images/arrow.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          Каталог домов
          <img className="arrow_down" src={arrowImg} alt="" />
        </li>
        <li className="navbar__item">
          Услуги <img className="arrow_down" src={arrowImg} alt="" />
        </li>
        <li className="navbar__item">
          О нас <img className="arrow_down" src={arrowImg} alt="" />
        </li>
        <li className="navbar__item">
          Контакты <img className="arrow_down" src={arrowImg} alt="" />
        </li>
        <li className="navbar__item">
          Блог <img className="arrow_down" src={arrowImg} alt="" />
        </li>
      </ul>
    </div>
  )
}
