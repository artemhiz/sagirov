import { useState } from 'react';
import './header.css';
import logo from './media/logo.png';
import menu from './media/menu.png';

export function NavBar({className="", isOpened, setOpening}) {
    return <nav className={className} onClick={() => className !== 'not-for-mobile' && setOpening(!isOpened)}>
        <button>Главная</button>
        <button>Технология</button>
        <button>График полетов</button>
        <button>Гарантии</button>
        <button>О компании</button>
        <button>Контакты</button>
    </nav>
}

export function Header({isOpened, setOpening}) {
    return <header>
        <div className='packer'>
            <div className='wrapper'>
                <button id="main-logo">
                    <img src={logo} alt='SpaceX'/>
                </button>
            </div>
            <NavBar className="not-for-mobile" isOpened={isOpened} setOpening={setOpening}/>
            <button className='mobile' onClick={() => setOpening(!isOpened)}>
                <img src={menu} alt='Menu'/>
            </button>
        </div>
    </header>
}