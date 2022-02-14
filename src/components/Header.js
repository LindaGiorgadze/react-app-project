// import logo from '../logo.svg';
// import Button from './Button';

import {Link} from 'react-router-dom';

export default function Header() {

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

    return (
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" onClick={example()} />
            <h1>{title}</h1> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
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