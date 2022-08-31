import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #99c02a;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Promo potongan bibit durian 50%, gratis ongkir!!
    </Container>
  )
}

export default Announcement