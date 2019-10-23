import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
/*
const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().required('E-mail is required.'),
  oldPassword: Yup.string().min(
    6,
    'Password should have at least 6 characters.'
  ),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword ? field.required('New password is required.') : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required().oneOf([Yup.ref('password')], 'Confirm the password')
      : field
  ),
});
*/
export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
    console.tron.log(data);
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" placeholder="E-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Old password" />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
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
