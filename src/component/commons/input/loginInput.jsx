import styled from 'styled-components';

const Input = styled.input`
  width: 25.8rem;
  height: 3.6rem;
  border: ${(props)=>(props.error ? '2px solid #e42121' : '0.3px solid #dbd9d9' )};
  margin: 0.5rem 0rem;
  padding-left: 1rem;
  background-color: #FAFAFA;
  ::placeholder{
    font-size: 1rem;
    padding-left: 0.1rem;
    color: gray;
    font-size: 1.2rem;
  }
`;

export default function LoginInput(props) {
  return (
    <>
      <Input 
        placeholder={props.text} 
        onChange={props.onChange} 
        type={props.type} 
        error={props.error}
        ref={props.inputRef}
        onKeyPress={props.OnKeyPressLogin}
      ></Input>
    </>
  );
}
