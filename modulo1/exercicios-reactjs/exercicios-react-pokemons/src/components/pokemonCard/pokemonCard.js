import styled from 'styled-components'

const PokemonCardContainer = styled.div`
    width: 50%;
    height: 100px;
    border: 1px solid orange;
`


export const PokemonCard = (props) => {
    return (
        <PokemonCardContainer onClick={props.onClick}>
            Name: {props.pokemon.name}
        </PokemonCardContainer>
    )
}