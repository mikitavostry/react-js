import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'
import classes from './Navbar.module.css'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>
                Log out
            </MyButton>
            <div className={classes.navbar__links}>
                <Link style={{ marginRight: 10 }} to='/about'>about site</Link>
                <Link to='/posts'>posts</Link>
            </div>
        </div>
    )
}

export default Navbar