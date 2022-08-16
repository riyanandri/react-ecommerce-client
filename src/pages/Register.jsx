import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/NrSmXsW/bg.jpg")center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 13px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 600;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>BUAT AKUN BARU</Title>
            <Form>
                <Input placeholder="nama depan" />
                <Input placeholder="nama belakang" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="kata sandi" />
                <Input placeholder="konfirmasi kata sandi" />
                <Agreement>
                    Dengan ini, saya menyetujui pemrosesan data pribadi
                    saya sesuai dengan <b>KEBIJAKAN DAN PRIVASI</b>
                </Agreement>
                <Button>DAFTAR</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register