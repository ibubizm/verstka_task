import './main.scss'
import { Navbar } from '../../components/navbar/navbar'
import videoImg from '../../images/video.svg'
import portfolioImg from '../../images/portf.svg'
import articleImg from '../../images/article.svg'
import { Input } from '../../components/input/input'
import { Button } from '../../components/button/button'
import calcImg from '../../images/calc.png'
import binocularsImg from '../../images/binoculars.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import { Header } from '../../components/header/header'

export const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <Navbar />
      <div className="container main__block">
        <div className="main__left">
          <h1 className="main__title">
            Мы знаем о строительстве все, каждый новый проект — это отдельная
            история
          </h1>
          <div className="main__subtitle">
            Здесь мы делимся с вами историями, уникальным пытом, реальными
            кейсами и видео-обзорами. Это дает нам стимул развиваться и держать
            руку на пульсе, а вам позволяет наблюдать за нашими рабочими
            процессами и учиться вместе с нами.
          </div>
          <div className="main__circle-blocks">
            <div className="main__circle-block">
              <div className="main__circle-icon">
                <img src={portfolioImg} alt="portfolio" />
              </div>
              <span>Кейсы</span>
            </div>
            <div className="main__circle-block">
              <div className="main__circle">
                <img src={videoImg} alt="video" />
              </div>
              <span>Видеоблог</span>
            </div>
            <div className="main__circle-block">
              <div className="main__circle">
                <img src={articleImg} alt="article" />
              </div>
              <span>Полезные статьи</span>
            </div>
          </div>
          <div className="main__form">
            <Input placeholder={'Ваше имя'} />
            <Input placeholder={'Номер телефона'} />
            <Button>Получить консультацию</Button>
          </div>
          <div className="main__form-description">
            Ищите профессионалов? Оставьте заявку и мы проконсультируем вас
            абсолютно бесплатно!
          </div>
        </div>
      </div>
      <div className="right-items">
        <div className="right-item">
          <img src={calcImg} alt="" />
        </div>
        <div className="right-item">
          <img src={binocularsImg} alt="" />
        </div>
        <div className="right-item">
          <img src={img3} alt="" />
        </div>
        <div className="right-item">
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  )
}
