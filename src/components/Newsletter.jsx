import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";


const Container = styled.div`
    height: 60vh;
    background-color: #f7faff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    border: none;
    flex: 1;
    background-color: #99c02a;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Subscribe</Title>
        <Description>Dapatkan informasi terbaru bibit dan benih tanaman dari kami.</Description>
        <InputContainer>
            <Input placeholder="Email"/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter