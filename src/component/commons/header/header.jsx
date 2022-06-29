import { useNavigate } from 'react-router-dom';
import * as S from './header.styles'

export default function Header(){
    let navigate = useNavigate();

    const OnClickLogout = () =>{
        localStorage.setItem('loginUserData', []);
        navigate('/')
        location.reload()
    }

    return(
        <>
            <S.Container>
                <S.ContentsBar>
                    <S.LogoImg src={'/login/instargram.png'}></S.LogoImg>
                    <S.SearchInput placeholder='검색'></S.SearchInput>
                    <S.IconList>
                        <S.Icon src='/header/home.png'/>
                        <S.Icon src='/header/send.png'/>
                        <S.Icon src='/header/add.png'/>
                        <S.Icon src='/header/position.png'/>
                        <S.Icon src='/header/heart.png'/>
                        <S.Icon src='/header/logout.png' onClick={OnClickLogout} />
                    </S.IconList>
                </S.ContentsBar>
            </S.Container>
        </>
    )
}