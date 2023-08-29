"use client";
import React, { useState } from "react";
import {
  Container,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
} from "./style";
import { useRouter } from "next/navigation";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    const { success } = data;

    if(!success){
      setError("Email veya Şifre Hatalı");
      return;
    }

    router.push("/");

  };

  return (
    <Container>
      <FormContainer>
        <Title>Giriş Yap</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleLogin}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default LoginContainer;
