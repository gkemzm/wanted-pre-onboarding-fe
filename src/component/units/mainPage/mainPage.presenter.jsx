import * as S from './mainPage.styles' 

export default  function MainPageHTML(props){
    console.log(props.usersData)
    return (
        <>
        {props.boardData &&
            <S.Container>
                <S.LeftWrapper>
                    {props.boardData?.map((el)=>(
                        <S.ContentsBox key={el.id}>
                            <S.UserInfo>
                                <S.BasicRow>
                                    <S.UserImg src='/main/user.png'/>
                                    <S.UserName>{el.writer}</S.UserName>
                                </S.BasicRow>
                                <S.ListIcon src='/main/dots.png'/>
                            </S.UserInfo>
                            <S.MainImg src={el.imgUrl}/>
                            <S.ContentsInfo></S.ContentsInfo>
                            <S.CommentArea>
                                <S.CommentIcon>😀</S.CommentIcon>
                                <S.CommentInput placeholder='댓글 달기....'/>
                                <S.CommentSubmit>제출</S.CommentSubmit>
                            </S.CommentArea>
                        </S.ContentsBox>
                    ))}
                </S.LeftWrapper>
                <S.RightWrapper>
                    <S.LoginUserInfo>
                        <S.BasicRow>
                            <S.LoginUserImg src='/main/user.png'/>
                            <S.BasicColumn>
                                <S.LoginUserId>{String(props.loginUser).split('[{"email":"').join('').split('",')[0].split('@')[0]}</S.LoginUserId>
                                <S.LoginUserName>{String(props.loginUser).split('"name":"').join('').split('"}]').join('').split(',')[2]}</S.LoginUserName>
                            </S.BasicColumn>
                        </S.BasicRow>
                        <p style={{color:'blue', fontSize:'1.2rem'}}>전환</p>
                    </S.LoginUserInfo>
                    <S.UserRecommend>
                        <S.Text1>회원님을 위한 추천</S.Text1>
                        <S.Text2>모두 보기</S.Text2>
                    </S.UserRecommend>
                    {props.usersData?.map((el)=>(
                        <S.RecommendList key={el.email}>
                            <S.BasicRow>
                               <S.UserImg src='/main/user.png'/>
                               <S.BasicColumn>
                                    <S.UserName>{el.name}</S.UserName>
                                    <S.UserEmail>{el.email}</S.UserEmail>
                               </S.BasicColumn>
                            </S.BasicRow>
                            <p style={{color:'blue', fontSize:'1.3rem'}}>팔로우</p>
                        </S.RecommendList>
                    ))}
                    <S.Footer>
                        <S.FooterMessage>소개▪도움말▪홍보센트▪API▪채용정보▪</S.FooterMessage>
                        <S.FooterMessage>개인정보처리방침▪약관▪위치▪인기계정▪해시태그▪언어</S.FooterMessage>
                        <S.FooterMessage style={{marginTop: '3rem'}}>@ 2022 INSTARGRAM FROM META</S.FooterMessage>
                    </S.Footer>
                </S.RightWrapper>
            </S.Container>
        }
        </>

    )
}