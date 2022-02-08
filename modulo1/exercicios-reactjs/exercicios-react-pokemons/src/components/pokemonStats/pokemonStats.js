import styled from 'styled-components'

export const PokemonStatsContainer = styled.div`
    width: 100%;
    height: 400px;
    border: 1px solid black;
    margin: 10px;
`

export const PokemonStats = (props) => {
    // console.log({props});
    return (
        <PokemonStatsContainer>
            Stacks
            HP: {props.hp}
            Attack: {props.Attack}
            Defense: {props.Defense}
        </PokemonStatsContainer>
    )
}