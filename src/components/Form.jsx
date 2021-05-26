import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import useCoin from '../hooks/useCoin';
import useCrytocoin from '../hooks/useCrytocoin';
import Error from './Error';


const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a1fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease ;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({ setCoin, setCrytocoin }) => {

    const [crytoList, setCrytolist] = useState([]);
    const [error, setError] = useState(false);


    const Divisas = [
        { codigo: 'USD', nombre: 'Dolar de estados unidos' },
        { codigo: 'ARS', nombre: 'Pesos Argentinos' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'MXN', nombre: 'Pesos Mexicanos' },
    ]

    //ultilizare useState

    const [coin, SelectCoin] = useCoin('Elije tu moneda', '', Divisas);

    //utiliza las critomoneda
    const [criptoCoin, SelecCryto] = useCrytocoin('Elije tu Criptomoneda', '', crytoList)

    //ejecutar call a la api
    useEffect(() => {
        const callApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setCrytolist(result.data.Data);
        }
        callApi();
    }, []);

    //cuando el usuario hace submit 
    const cotizarCoin = e => {
        e.preventDefault();

        //validar ambos campos
        if (coin === '' || criptoCoin === '') {
            setError(true);
            return;
        }
        setError(false);
        setCoin(coin);
        setCrytocoin(criptoCoin);
    }

    return (
        <form
            onSubmit={cotizarCoin}
        >
            {error ? <Error message='Todos los campos son obligatorios' /> : null}
            <SelectCoin />
            <SelecCryto />
            <Button
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Form;