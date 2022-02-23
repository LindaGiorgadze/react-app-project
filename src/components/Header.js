// import logo from '../logo.svg';
// import Button from './Button';
import ThemeContext from '../themeContext';

import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import { useContext } from 'react';

export default function Header() {

    const { theme, setTheme } = useContext(ThemeContext); 

    const {t} = useTranslation();

    // function example() {
    // console.log('Image is Clicked');
    // }

    // const title = 'Main Title';

    // const colors = [
    // 'green',
    // 'red',
    // 'black'
    // ];

    // const comments = [
    // {
    //     id: 1,
    //     text: 'comment 1'
    // },
    // {
    //     id: 2,
    //     text: 'comment 2'
    // },
    // {
    //     id: 3,
    //     text: 'comment 3'
    // }
    // ];

    const nav = [
    'Home',
    'About',
    'Contact'
    ];

    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }

    return (
        <header className="App-header">
            <span>{theme}</span>
            <button onClick={changeTheme }>
                Change Theme
            </button>
            {/* <img src={logo} className="App-logo" alt="logo" onClick={example()} />
            <h1>{title}</h1> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">{t('home')}</Link>
                    </li>
                    <li>
                        <Link to="/about">{t('about')}</Link>
                    </li>
                    <li>
                        <Link to="/contact">{t('contact')}</Link>
                    </li>
                </ul>
            </nav>
            {/* {
            comments
            .filter(item => item.id < 3)
            .map(comment => {
                return (
                // <p key={comment.id}>
                //   {comment.text}
                // </p>
                <Button key={comment.id} customClass='Click' text={comment.text}/>
                )
            })
            }
            <Button customClass='Click' text='Click Me'/>
            <Button customStyle={{backgroundColor: 'red'}} text='Button 2'/>
            {
            colors.map((color, index) => {
                return (
                <span  key={index}>{color}</span>
                )
            })
            } */}
        </header>
    )
}