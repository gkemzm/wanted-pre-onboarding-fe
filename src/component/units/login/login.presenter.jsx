import LoginBtn from '../../commons/button/loginBtn'
import LoginInput from '../../commons/input/loginInput'
import * as S from './login.styles'

export default function LoginHTML(props){

    return(
        <>
            <S.Container>
                <S.LoginBox>
                    <S.TitleImg src={'/login/instargram.png'}></S.TitleImg>
                    <LoginInput type='text' text='전화번호, 사용자 이름 또는 이메일' 
                        onChange={props.OnChangeEmail} 
                        error={props.emailError}
                        inputRef={props.inputRef} 
                        OnKeyPressLogin={props.OnKeyPressLogin}/>
                    <LoginInput type='password' text='비밀번호' 
                        onChange={props.OnChangePassword} 
                        error={props.passwordError} 
                        OnKeyPressLogin={props.OnKeyPressLogin}/>
                    <LoginBtn isActive={props.isActive} title='로그인' 
                        onClick={props.OnClickLogin} 
                        OnKeyPressLogin={props.OnKeyPressLogin}/>
                    <S.BasicRow>
                        <S.Line></S.Line>
                        <S.OrText>또는</S.OrText>
                        <S.Line></S.Line>
                    </S.BasicRow>
                    <S.BasicRow>
                        <S.FacebookImg src='/login/facebook.png' />
                        <S.FacebookLogin>Facebook으로 로그인</S.FacebookLogin>
                    </S.BasicRow>
                    <S.FindPassword>비밀번호를 잊으셨나요?</S.FindPassword>
                </S.LoginBox>

                <S.SignUpBox>
                    <S.BasicRow>
                        <S.Text>계정이없으신가요?</S.Text>
                        <S.SignUp>가입하기</S.SignUp>
                    </S.BasicRow>
                </S.SignUpBox>
                <S.Text>앱을 다운로드하세요.</S.Text>

                <S.BasicRow>
                    <S.Store src='/login/appStore.png'/>
                    <S.Store src='/login/playStore.png'/>
                </S.BasicRow>
            </S.Container>
        </>
    )
}