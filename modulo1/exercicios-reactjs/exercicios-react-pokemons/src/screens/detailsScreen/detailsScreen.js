import { useEffect, useState } from 'react'
import { DetailsScreenContainer } from './styled'
import { PokemonHeader } from '../../components/pokemonHeader/pokemonHeader'
import { PokemonStats } from '../../components/pokemonStats/pokemonStats'
import { PokemonImage } from '../../components/pokemonImage/pokemonImage'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export const DetailsScreen = () => {
    const [details, setDetails] = useState ({
        name: "Sem nome",
        types:[],
        hp: 0,
        attack: 0,
        defense: 0
    })

    const { name } = useParams();

    useEffect(()=> {
        console.log(name);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            console.log(response.data)
            setDetails(response.data)
        }).catch(error => console.log(error))
    }, []);

    return (
        <DetailsScreenContainer>
            <div style={{width: '40%'}}>
            <PokemonHeader name={details.name} types={details.types}/>
                
            <PokemonStats hitPoints={details.hp} attack={details.attack} defense={details.defense}/>
               
           
            </div>

            <PokemonImage>

            </PokemonImage>
        </DetailsScreenContainer>
    )
}
