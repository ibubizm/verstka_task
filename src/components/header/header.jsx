import './header.scss'
import logo from '../../images/logo.svg'
import img3d from '../../images/3d.svg'
import phoneImg from '../../images/phone.svg'
import telegaImg from '../../images/telega.svg'
import whatsupImg from '../../images/whatsup.svg'
import viberImg from '../../images/viber.svg'
import { Button } from '../button/button'

export const Header = () => {
  return (
    <div className="header container">
      <img className="header__logo" src={logo} alt="" />
      <ul className="header__time">
        <li>Пн-Сб: c 10:00 до 20:00</li>
        <li>Выходной: воскресенье</li>
      </ul>
      <div className="block__3d">
        <img src={img3d} alt="" />
        <span>Заказать 3D-макет дома</span>
      </div>
      <div className="social">
        <div className="social__main">
          <img className="social__main-icon" src={phoneImg} alt="" />
        </div>
        <div className="social__contacts">
          <h3 className="social__phone-namber">+7 (915) 168-55-50</h3>
          <div className="social__media">
            <img className="social__icon" src={telegaImg} alt="" />
            <img className="social__icon" src={whatsupImg} alt="" />
            <img className="social__icon" src={viberImg} alt="" />
          </div>
        </div>
      </div>
      <Button size={'m'}>Заказать звонок</Button>
    </div>
  )
}
