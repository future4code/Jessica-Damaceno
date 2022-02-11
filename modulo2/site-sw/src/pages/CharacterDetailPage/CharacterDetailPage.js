
import React from "react";
import {useNavigate} from "react-router-dom"
import { CharacterDetailPageContainer, ActionButton } from "./CharacterSTYLE";
import { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from '../../constants/url'

export const CharacterDetailPage = () => {
  const navigation = useNavigate();

  //   const [characterListPage, setCharacterListPage] = useState(["list"]);

  const [ character, setCharacter] = useState([]);

  useEffect (() => {
    axios.get(`${BASE_URL}/people/`)
    .then(({data}) => 
      setCharacter(data.results)
   ).catch(err => console.log(err))
  }, [])

  return (
    <CharacterDetailPageContainer>
    <h1>detalhes</h1>
    </CharacterDetailPageContainer>
  );
};

// export const selectPage = () => {
//     return {

//     }
// }
