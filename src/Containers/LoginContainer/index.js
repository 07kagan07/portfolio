"use client"
import React, { useState } from 'react';
import {
  Container,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
} from './style';

const LoginContainer = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Giriş işlemleri burada yapılabilir
      if (username === 'user' && password === 'pass') {
        setError('');
        console.log('Giriş başarılı');
      } else {
        setError('Kullanıcı adı veya şifre hatalı.');
      }
    };
  
    return (
      <Container>
        <FormContainer>
          <Title>Giriş Yap</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <form onSubmit={handleLogin}>
            <FormGroup>
              <Label>Kullanıcı Adı</Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Şifre</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button type="submit">Giriş Yap</Button>
          </form>
        </FormContainer>
      </Container>
    );
  };

export default LoginContainer