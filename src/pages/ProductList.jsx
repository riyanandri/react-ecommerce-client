import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })} 
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Durian</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter:</FilterText>
                <Select>
                    <Option disabled selected>
                    Jenis
                    </Option>
                    <Option>Musang King</Option>
                    <Option>Montong</Option>
                    <Option>Bawor</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                    Umur
                    </Option>
                    <Option>1 Bulan</Option>
                    <Option>2 Bulan</Option>
                    <Option>3 Bulan</Option>
                    <Option>6 Bulan</Option>
                    <Option>12 Bulan</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sortir:</FilterText>
                <Select>
                    <Option selected>Terbaru</Option>
                    <Option>Harga (asc)</Option>
                    <Option>Harga (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList