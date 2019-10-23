import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <button type="button">Logout</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
