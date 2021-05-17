import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
<ul aria-label="characters">
    {characters.map((character) => (
        <li key={character.id}>
            <Link to={`/details/${character.id}`}>
            <Character
            name={character.name}
            affiliation={character.affiliation}
            image={character.image}
            />
            </Link>
        </li>
     ))}
</ul>
);

export default CharacterList;