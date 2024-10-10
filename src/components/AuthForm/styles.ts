import styled from 'styled-components';
import { Button, Input, Checkbox } from 'antd';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CustomInput = styled(Input)`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #1c1c1c;
  margin-top: 1rem;
  width: 320px;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border-color: #00a9c1;
  }
`;

export const CustomInputPassword = styled(Input.Password)`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #1c1c1c;
  margin-top: 1rem;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border-color: #00a9c1;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  border-radius: 1rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .ant-form-item {
    margin: 0;
  }

  a {
    color: #00a9c1;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: #116c74;
    }

    &:active {
      color: #00a9c1;
    }
  }
`;

export const CustomCheckbox = styled(Checkbox)`
  span {
    color: #404040;
  }
`;

export const LinkContainer = styled.div`
  text-align: center;
  color: #404040;

  span {
    margin-right: 5px;
  }

  a {
    color: #00a9c1;

    &:hover {
      color: #116c74;
    }

    &:active {
      color: #00a9c1;
    }
  }
`;
