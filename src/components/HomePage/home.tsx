import Gallery from './gallery';
import { TypeAnimation } from 'react-type-animation';
import arrow from '../../../public/icons/square-arrow-down.svg';
import './home.css'; 
import biography from '../../../biography.json'

export default function Home() {


    return (
        <>
            <h2 className="title-section-main">Главная страница</h2>
            <div className="container-main">
                <Gallery />
                <div className="right-side-home">
                    <TypeAnimation
                        sequence={[
                            'Привет! Меня зовут Артем',
                            1000,
                            'Привет! Меня зовут Тим Порт',
                            1000,
                            'Привет! Меня зовут Артем или Тим Порт.',
                            1000,
                            'Расскажу чуть о себе. Я живу в небольшом городе РФ. Свою первую книгу я написал в 15 лет. Сейчас мне уже 17 и совсем недавно я написал свою третью книгу.',
                            1000,
                        ]}
                        speed={30}
                        repeat={Infinity}
                        className='short-biography'
                    />
                    <br />
                    <h4 className='short-biography for-nav'>
                        Ниже вы найдете небольшую навигацию, чтобы почитать биографию обо мне.
                    </h4>
                    <a href="#navigate-block">
                        <img src={arrow} alt="" className='arrow-img' />
                    </a>
                </div>
            </div>

            <div id='navigate-block' className="navigation-block">
                <h4 className='navigation-block-title'>Блок навигации</h4>
                <ul className="navigations-titles">
                    {biography.map((biography, index) => (
                        <li key={index} className="item-biog-list">
                           <a href={`#${biography.title}`}>{biography.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="biography-text-titles">
                <ul className="navigations-titles">
                    {biography.map((biography, index) => (
                        <li key={index} className="item-biography-list">
                           <h5 id={`${biography.title}`} className='name-section-biography '>{biography.title}</h5>
                           <p className='some-text-biography '>{biography.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
