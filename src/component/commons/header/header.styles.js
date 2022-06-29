import styled from 'styled-components';
import { breakPoints } from '../../../styles/media';

export const Container = styled.div`
    height: 6rem;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #BDBDBD;
    position: fixed;
`

export const ContentsBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 97.5rem;
    height: 6rem;
    padding: 0rem 2rem;
`

export const LogoImg = styled.img`
    width: 10.3rem;
    height: 2.9rem;
`

export const SearchInput = styled.input`
    width: 26.8rem;
    height: 2.5rem;
    background-color: #EFEFEF;
    padding: 1.8rem 1.6rem;
    margin-left: 15rem;
    border-radius: 1rem;
    font-size: 1.5rem;

    ::placeholder{
        background-image: url('/header/search.png');
        background-size: 1.6rem 1.6rem;
        background-repeat: no-repeat;
        color: black;
        padding-left:2rem;
    }

    @media ${breakPoints.mobile} {
        display: none;
    }
`

export const IconList = styled.div`
    max-width: 27.8rem;
    min-width: 27.8rem;
    height: 2.4rem;

    @media ${breakPoints.mobile} {
        min-width: 20rem;
    }
`

export const Icon = styled.img`
    width: 2.2rem;
    height: 2.2rem;
    margin-left: 2.2rem;
    cursor: pointer;

    @media ${breakPoints.mobile} {
        margin-left: 1rem;
    }
`