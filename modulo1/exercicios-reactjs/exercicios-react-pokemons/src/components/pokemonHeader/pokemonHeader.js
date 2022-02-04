import React from 'react';
import styled from 'styled-components'

const PokemonHeaderContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid black;
    margin: 10px;
`

export const PokemonHeader = (props) => {
    console.log(props.types)    
    return (
            <PokemonHeaderContainer>
                Name: {props.name}
                <br/>
                {props.types.map((type, index) => (
                    <React.Fragment key={index}> Tipo: {(type.type.name)}<br/></React.Fragment>
                ))}
                {/* 1º type: {props.types[0].type.name} */}
                {/* <br/>
                2º type: {props.types[1]} */}
            </PokemonHeaderContainer>

       );
   };