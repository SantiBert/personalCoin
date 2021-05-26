import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;

const Price = styled.p`
     font-size: 30px;
    span {
        font-weight:bold;
    }
`;


const Cotization = ({ result }) => {

    if (Object.keys(result).length === 0) return null;

    console.log(result)

    return (
        <ResultDiv>
            <Price>El precio es: <span>{result.PRICE}</span></Price>
            <Info>El precio más bajo del dia: <span>{result.LOWDAY}</span></Info>
            <Info>El precio más alto del dia: <span>{result.HIGHDAY}</span></Info>
            <Info>Variación de las ultimas 24 hora: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualización: <span>{result.LASTUPDATE}</span></Info>
        </ResultDiv>
    );
}

export default Cotization;