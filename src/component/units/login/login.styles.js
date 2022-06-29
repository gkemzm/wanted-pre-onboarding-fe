import styled from 'styled-components';
import { breakPoints } from '../../../styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 97.5rem;
  padding: 4rem;

  @media ${breakPoints.mobile} {
    max-width: 41.4rem;
  }
`;

export const BasicRow = styled.div`
  display: flex;
  justify-content: center;
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 39.6rem;
  background-color: white;
  border: 1px solid #BEBEBE;
`

export const TitleImg = styled.img`
  padding-bottom: 3rem;
`;

export const OrText = styled.p`
  padding: 1.5rem;
  color: #8e8e8e;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
`
export const Line = styled.div`
  width: 10rem;
  border-bottom: 1px solid #8e8e8e;
  margin-bottom: 3.3rem;
`
export const FacebookLogin = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: #385185;
  margin-left: 0.7rem;
  margin-bottom: 2.8rem;
  cursor: pointer;
`
export const FacebookImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`
export const FindPassword = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
`

export const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 6.3rem;
  margin-top: 1rem;
  margin-bottom: 2.2rem;
  background-color: white;
  border: 1px solid #BEBEBE;
`
export const Text = styled.p`
  font-size: 1.4rem;
`
export const SignUp = styled.p`
  color: #0095F6;
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 0.5rem;
  cursor: pointer;
`

export const Store = styled.img`
  margin-top: 2.2rem;
  margin-left: 0.3rem;
  width: 13.6rem;
  height: 4rem;
  cursor: pointer;
`