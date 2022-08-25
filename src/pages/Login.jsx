import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type={'text'} placeholder='login'></MyInput>
                <MyInput type={'password'} placeholder='password'></MyInput>
                <MyButton>Submit</MyButton>
            </form>
        </div>
    )
}

export default Login