import './header.css'
import {Link} from 'react-router-dom'
import Backet from '../../../public/icons/backetIcon.svg'
import User from '../../../public/icons/userProfile.svg'
import LogoSite from '../../../public/logosite/logo-site.png'


export default function Header () {
    return(
        <header className='header'>
            <Link to='/' className='logo-title-block'>
                <img src={LogoSite} alt="Логотип" className='logo-image' />
                <h1 className='title-header'>
                    ТП Books
                </h1>
            </Link>
            <nav className='list-header-nav'>
                <ul className='list-header'>
                     <li className='item-list catalog-item'>
                        <Link to={'/catalog'} className='link-list '>Католог</Link>
                     </li>
                     <li className='item-list icons-list'>
                        <Link to={'/basket'}><img src={Backet} alt='Корзина'/></Link>
                     </li>
                     <li className='item-list icons-list'>
                        <Link to={'/register'}><img src={User} alt='Профиль пользоватея'/></Link>
                     </li>
                </ul>
            </nav>

        </header>
    )
}