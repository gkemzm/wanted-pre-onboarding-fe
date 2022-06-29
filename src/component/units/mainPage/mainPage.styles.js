import styled from 'styled-components';
import { breakPoints } from '../../../styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 97.5rem;
  padding: 2rem 0rem;
  margin-top: 6rem;

  @media ${breakPoints.mobile} {
    max-width: 41.4rem;
  }
`;
export const BasicColumn = styled.div`
  display: flex;
  flex-direction:column;
`
export const BasicRow = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
`
export const LeftWrapper = styled.div`
  width: 64%;
  height: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  margin-bottom: 2rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: white;
`

export const UserImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
`

export const ListIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`

export const UserName = styled.div`
  display: flex;
  align-items: center;
  max-width: 10rem;
  font-size: 1.2rem;
  font-weight: 700;
`
export const UserEmail = styled.div`
  display: flex;
  align-items: center;
  max-width: 20rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #BEBEBE;
  margin-top: 0.5rem;
`
export const MainImg = styled.img`
  width: 100%;
  height: 38rem;
  max-height: 50rem;
  object-fit: cover;
`

export const ContentsInfo = styled.div`
  width: 100%;
  height: 13rem;
  background-color: white;
`

export const CommentArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4rem;
  border-top: 1px solid #BDBDBD;
  background-color: white;
`
export const CommentIcon = styled.div`
  padding-left: 1rem;
`
export const CommentInput = styled.input`
  width: 90%;
  font-size: 1.2rem;
`
export const CommentSubmit = styled.div`
  color: blue;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
`

export const RightWrapper = styled.div`
  width: 36%;
  padding: 4rem 2rem;

  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const LoginUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;
`
export const LoginUserImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 1.2rem;
`
export const LoginUserName = styled.div`
  font-size: 1.2rem;
  color : gray;
`

export const LoginUserId = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const UserRecommend = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`
export const Text1 = styled.p`
  color: gray;
  font-size: 1.3rem;
  font-weight: 700;
`
export const Text2 = styled.p`
  color: gray;
  font-size: 1.2rem;
  font-weight: 700;
`
export const RecommendList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0rem;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`

export const FooterMessage = styled.div`
  color: #BDBDBD;
  font-size: 1.1rem;
  font-weight: 700;
`