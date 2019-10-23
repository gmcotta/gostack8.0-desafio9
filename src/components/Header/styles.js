import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 30px;
    text-align: right;

    strong {
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #999;
    }
  }

  button {
    padding: 15px;
    background: #d44059;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#d44059')};
    }
  }
`;
