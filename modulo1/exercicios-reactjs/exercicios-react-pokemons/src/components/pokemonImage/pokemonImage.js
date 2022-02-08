import styled from 'styled-components'

const PokemonImageContainer = styled.img`
    width: 50%;
    height: 500px;
    border: 1px solid;
    color: orange;
    margin: 10vh 10vh 10vh 10vh
`;

export const PokemonImage = (props) => {
    return (
        <PokemonImageContainer src={props.sprites}/>
    )
}

