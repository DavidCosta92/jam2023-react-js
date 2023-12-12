
// @ts-nocheck
import './Header.css'

export default function Header(props){
    return (
        <header>
            <img src="./../logo.svg" alt='logo' className='app-logo'/>            
            <h1 className='app-title'>{props.pageTitle}</h1>
        </header>
    )

}