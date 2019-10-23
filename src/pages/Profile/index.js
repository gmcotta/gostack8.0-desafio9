import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" placeholder="E-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Old password" />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm new password"
        />
        <button type="submit">
          <MdAddCircleOutline color="#fff" size={20} />
          <span>Save profile</span>
        </button>
      </Form>
    </Container>
  );
}
