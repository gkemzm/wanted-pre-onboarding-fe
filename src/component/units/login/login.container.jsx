import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginHTML from './login.presenter'
import axios from 'axios';
import { CheckValidationLoginEmail, CheckValidationLoginPassword } from './validation'

export default function LoginScript(){

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [isActive, setIsActive] = useState(false)

    let navigate = useNavigate();

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const OnChangeEmail = (event) => { 
        setTimeout(() => {
            setEmail(event.target.value);
        },700)
        const emailInfo = CheckValidationLoginEmail(event.target.value);
        if (!emailInfo) {
            setEmailError(true)
            setIsActive(false);
            return
        }
        try{
            setEmailError(false)
            if (event.target.value && password) {
                setIsActive(true);
              } else {
                setIsActive(false);
              }
        }catch{
            alert('email error')
        }
    };
    
    const OnChangePassword = (event) => {
        setTimeout(() => {
            setPassword(event.target.value);
        },700)
        const pwInfo = CheckValidationLoginPassword(event.target.value);
        if (!pwInfo) {
            setPasswordError(true)
            setIsActive(false);
            return
        }
        try{
            setPasswordError(false)
            if (event.target.value && email) {
                setIsActive(true);
              } else {
                setIsActive(false);
              }
        }catch{
            alert('password error')
        }
    };

    const OnKeyPressLogin = (event) =>{
        if(event.key === 'Enter'){
            OnClickLogin()
        }
    }
    const OnClickLogin = async () => { 
        const result = await axios.get('http://localhost:3000/users')
        const userData = result?.data.filter((el)=>(el.email === email && el.password === password))
        if(!userData) return alert('잘못된 정보입니다.')
        try{
            if(userData){
                localStorage.setItem('loginUserData', JSON.stringify(userData))
                navigate('/main')
            }
        }catch(error){
            console.log(error)
        }
    }

    return <LoginHTML 
        OnChangeEmail={OnChangeEmail}
        OnChangePassword={OnChangePassword}
        OnClickLogin={OnClickLogin}
        OnKeyPressLogin={OnKeyPressLogin}
        isActive={isActive}
        emailError={emailError}
        passwordError={passwordError}
        inputRef={inputRef}
    />
}