import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
import Container from '../container';
import Title from './title';

export default function MainUserInfo() {
  const { user, setUserData, isUserUpdating } = useMoralis();

  const [username, setUsername] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    username.trim() &&
      setUserData({
        username
      }).then(() => setUsername(''));
  };

  return (
    <Container>
      <Title>Perfil</Title>
      <div className="flex flex-col gap-3 mb-4">
        <span>
          <strong>Username: </strong> {user?.getUsername()}{' '}
        </span>
        <span>
          <strong>Wallet Address: </strong> {user?.get('ethAddress')}{' '}
        </span>
        <span>
          <strong>Email: </strong>{' '}
          {user?.getEmail() || 'No hay correo registrado'}{' '}
        </span>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <fieldset className="border border-slate-400 p-6">
          <legend>Cambiar credenciales</legend>
          <label>
            Ingrese un nuevo username
            <input
              className="mx-4 border border-black"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" disabled={isUserUpdating} />
        </fieldset>
      </form>
    </Container>
  );
}
