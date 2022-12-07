import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  align-items: centre;
`;

export const ButtonsItem = styled.li`
  & + & {
    margin-left: 15px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1.16;
  background-color: #b9b5b5d1;
  border-radius: 5px;
  &:first-letter {
    text-transform: uppercase;
  }
`;
