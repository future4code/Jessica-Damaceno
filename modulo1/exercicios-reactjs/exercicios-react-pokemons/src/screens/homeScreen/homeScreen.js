import { HomeScreenContainer } from './styled'
import { PokemonCard } from '../../components/pokemonCard/pokemonCard'
import { PokemonHeader } from '../../components/pokemonHeader/pokemonHeader'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export const HomeScreen = () => {
    
    const [pokemons, setPokemons] = useState ([
        {name: 'chamander', url: ''},
        {name: 'bulbasaur', url: ''},
        {name: 'pikachu', url: ''},
    ])
    
    const history = useHistory();

    useEffect(() => {
        axios.get(' https://pokeapi.co/api/v2/pokemon/')
        .then((response)=>{
            setPokemons(response.data.results);
        }).catch(error => console.log(error))
    }, [])

    const onClickPokemon = (name) => {
        history.push(`/details/${name}`)
    }

    return (
        <HomeScreenContainer>
            {pokemons.map((pokemonItem, index) => {
                return (
                    
                    <PokemonCard onClick={() => onClickPokemon(pokemonItem.name)} key={index} pokemon={pokemonItem}/>
                )
            })}
        </HomeScreenContainer>
    )
}
//*/