import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 20px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    hr {
      margin: 20px 0;
      border-color: rgba(255, 255, 255, 0.1);
    }

    span {
      color: #f94d6a;
      align-self: flex-start;
      margin-bottom: 10px;
    }

    button {
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      justify-content: center;
      align-items: center;
      width: 162px;
      height: 42px;
      background: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      > span {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin: 2px 0 0 10px;
      }
    }
  }
`;
