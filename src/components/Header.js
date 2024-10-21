import {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import AuthContext from '../store/authContext'
import logo from '../assets/dm-logo-white.svg'

const Header = () => {
    const {state, dispatch} = useContext(AuthContext)

    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f57145' : ''
        }
    }

    return (
        <header className='header flex-row'>
            <div className='flex-row'>
                <img src={logo} alt='dm-logo' className='logo'/>
                <h2>Social Mountain</h2>
            </div>
            <nav>
                {
                    state.token ? (
                        <ul className='main-nav'>
                            <li>
                                <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='profile'>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='form'>Add Post</NavLink>
                            </li>
                            <li>
                                <button className='logout-btn' onClick={() => dispatch({type: 'LOGOUT'})}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className='main-nav'>
                            <li>
                                <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='/auth'>Login or Sign Up</NavLink>
                            </li>
                        </ul>
                    )
                }
            </nav>
        </header>
    )
}

export default Header