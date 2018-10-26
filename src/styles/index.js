import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 2rem 5% 2rem 5%;
`;

export const FormBox = styled.div`
  border: solid 4px gray;
  height: 175px;
  width: 200px;
  border-radius: 10px;
`;

export const FormTitle = styled.div`
  height: 50px;
  background-color: gray;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
`;

export const FormField = styled.div`
  
`;

export const CheckBox = styled.span`
  height: 25px;
  width: 25px;
  background-color: #eee;
`;