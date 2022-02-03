// import {} from 'react'
import { DetailsScreenContainer } from './styled'
import { PokemonHeader } from '../../components/pokemonHeader/pokemonHeader'
import { PokemonStats } from '../../components/pokemonStats/pokemonStats'
import { PokemonImage } from '../../components/pokemonImage/pokemonImage'


export const DetailsScreen = () => {
    return (
        <DetailsScreenContainer>
            <div style={{width: '40%'}}>
            <PokemonHeader>
                Bulbasaur
                Grass poison
            </PokemonHeader>
                
            <PokemonStats>
                Stats
                HP 100
                Attack 100
                Defense 100
            </PokemonStats>
            </div>

            <PokemonImage>

            </PokemonImage>
        </DetailsScreenContainer>
    )
}
