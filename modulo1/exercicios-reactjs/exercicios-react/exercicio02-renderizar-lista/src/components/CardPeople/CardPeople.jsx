import React from 'react'
// import "./styles.css";

const CardPeople = ({name, height, mass, hair_color, eye_color, birth_year, gender}) => {
    return (
        <ul className="dados"> 
                
              

            <li>
                <p className="Name">
                    {name}
                </p>
                <div className="info">
                <p>
                    {height}
                </p>
                
                <p>
                     {mass}
                </p>
                
                <p>
                    {hair_color}
                </p>
                
                <p>
                    {eye_color}
                </p>
                
                <p>
                    {birth_year}
                </p>
                
                <p>
                    {gender}
                </p>
                </div>
            </li>
        </ul>
    )
}
export default CardPeople
