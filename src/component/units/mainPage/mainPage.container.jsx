import { useEffect } from 'react';
import MainPageHTML from './mainPage.presenter';
import axios from 'axios';
import { useState } from 'react';

export default  function MainPageScript(){
    const [boardData, setBoardData] = useState([])
    const [usersData, setUserData] = useState([])
    const [loginUser, setLoginUser] = useState({})
    const [comment, setComment] = useState('')

    useEffect(()=>{
        BoardData()
    },[])

    const BoardData = async () => { 
        const boards = await axios.get('http://localhost:3000/posts')
        const users = await axios.get('http://localhost:3000/users')
        const loginUser = localStorage.getItem('loginUserData')
        setBoardData([...boards?.data])
        setUserData([...users?.data])
        setLoginUser(loginUser)
    }

    const OnChangeComment = (event) => { 
        setTimeout(() => {
            setComment(event.target.value);
        },1000)
    };
    return <MainPageHTML 
        boardData={boardData}
        loginUser={loginUser}
        usersData={usersData}
        OnChangeComment={OnChangeComment}
    />
}