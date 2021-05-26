import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Selection = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance:none;
    border-radius: 10px;
    border: none;
`;

const useCoin = (label, stateInicial, opciones) => {
    //State de nuestro hook
    const [state, updateState] = useState(stateInicial);


    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selection
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value=""> -Seleccione- </option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Selection>
        </Fragment>
    );

    //Retorna state
    return [state, Select, updateState];
}

export default useCoin;
