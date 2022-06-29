import React, { useEffect, useState } from 'react';
import MainPage from './pages/main/mainPage';
import LoginPage from './pages/login/loginPage';
import { Routes, Route } from 'react-router-dom';
import Header from './component/commons/header/header';
import styled from 'styled-components';
import 'antd/dist/antd.min.css';

const Body = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(250, 250, 250);
`

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    UserData()
  },[])

  const UserData = () =>{
    const user = []
    if(localStorage.getItem('userInfo') !== ''){
      user.push(localStorage.getItem('userInfo'))
      setUserData(user)
    }
  }

  return (
    <>
      <Header />
      <Body>
        <Routes>
          {userData?.length === 0 || userData?.[0] === null ? 
          <>
            <Route path="/"  element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </> : 
          <>
            <Route path="/"  element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
          </> }
        </Routes>
      </Body>
    </>
	);
}
export default App;
