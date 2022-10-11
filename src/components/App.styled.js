import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  outline: 2px solid black;
  width: 450px;
  height: 300px;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 300px;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  border-radius: 4px;
  :focus-visible,
  :active {
    border: 2px solid blue;
    box-shadow: 2px 2px 5px blue;
  }
`;
export const SubmitBtn = styled.button`
  width: 150px;
  height: 30px;
  background-color: #fff;
  border-radius: 4px;
  :hover,
  :focus {
    background-color: aqua;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
export const P = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;
export const Btn = styled.button`
  height: 20px;
  :hover,
  :focus {
    background-color: aqua;
  }
`;
// export const FilterInput = styled.input`
//   width: 250px;
//   height: 25px;
//   font-size: 16px;
//   border-radius: 4px;
// `;
