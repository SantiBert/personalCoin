import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from '../src/cryptomonedas.png';
import axios from 'axios';

import Form from './components/Form';
import Cotization from './components/Cotization';
import Spinner from './components/Spinner';

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  
  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [coin, setCoin] = useState('');
  const [crytoCoin, setCrytocoin] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const CotizCrytocoin = async () => {
      if (coin === '') return;

      // consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crytoCoin}&tsyms=${coin}`;

      const response = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        setResult(response.data.DISPLAY[crytoCoin][coin]);
      }, 3000);

    }
    CotizCrytocoin();
  }, [coin, crytoCoin])

  const component = (loading) ? <Spinner /> : <Cotization result={result} />

  return (
    <Content>
      <div>
        <Image
          src={image}
          alt='Imagen cryto'
        />
      </div>
      <div>
        <Heading>
          Cotizador Para Dai
        </Heading>
        <Form
          setCoin={setCoin}
          setCrytocoin={setCrytocoin}
        />
        {component}
      </div>
    </Content>
  )
}

export default App;
