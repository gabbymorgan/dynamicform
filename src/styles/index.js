import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 2rem 5% 0 5%;
`;

export const FormBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border: solid 4px;
  border-color: ${props => props.selected ? 'gray' : 'lightgray'};
  height: 175px;
  width: 200px;
  border-radius: 10px;
  margin: 0 0 0 2%;
`;

export const FormTitle = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${props => props.selected ? 'gray' : 'lightgray'};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
`;

export const FormField = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
`;

export const CheckBox = styled.input`
  height: 25px;
  width: 25px;
  background-color: #eee;
  display: ${props => props.hide ? 'none' : 'block'};
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: gray;
  margin: 0 2% 0 2%;
`;
